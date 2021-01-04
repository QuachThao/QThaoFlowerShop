import { ConfirmDialogModel } from './../dialog-fail-all/dialog-fail-all.component';
import { UpdateCateComponent } from './../update-cate/update-cate.component';
import { FormControl } from '@angular/forms';
import { AddProductComponent } from './../add-product/add-product.component';
import { CategoryService } from 'src/app/services/category.service';
import { BillService } from '../../services/bill.service';
import { CartItemService } from '../../services/cart-item.service';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/models/user-dto';
import { AccountService } from 'src/app/services/account.service';
import { DetailCustomerComponent } from '../detail-customer/detail-customer.component';
import { VoiceRecognitionService } from 'src/app/services/voice-recognition.service';
import { CategoryDto } from 'src/app/models/category-dto';
import { AddCateComponent } from '../add-cate/add-cate.component';
import { DialogSuccessedComponent } from '../dialog-successed/dialog-successed.component';

@Component({
  selector: 'app-cate-management',
  templateUrl: './cate-management.component.html',
  styleUrls: ['./cate-management.component.css'],
})
export class CateManagementComponent implements OnInit {
  displayedColumns: string[] = ['position', 'displayName', 'actions'];
  dataSource: any = new MatTableDataSource<PeriodicElement>(null);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  panelOpenState = false;
  popoverTitle = 'XOÁ LOẠI SẢN PHẨM';
  popoverMessage = 'Bạn chắc là bạn muốn <b>xóa</b>?';
  confirmClicked = false;
  cancelClicked = false;
  resultSearch: CategoryDto[] = [];
  searchText;
  myControl = new FormControl();

  constructor(
    private router: Router,
    private accountService: AccountService,
    private productService: ProductService,
    private cartItemservice: CartItemService,
    private billService: BillService,
    private category: CategoryService,
    private dialog: MatDialog,
    private categoryService: CategoryService,
    public voiceRecognitionService: VoiceRecognitionService
  ) {}
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.category.getAllCategories().subscribe((cate) => {
      this.dataSource = cate;
      console.log(cate);
    });
  }
  onEdit(data: CategoryDto): void {
    const dialogRef = this.dialog.open(UpdateCateComponent, {
      width: '400px',
      data: data,
    });
  }
  onDetail():void{}
  onDelete(id: any): void {
    console.log('DELETE', id);
    this.category.remove(id).subscribe();
    location.reload();
    const message = `Đã xóa loại sản phẩm!`;
          const dialogData = new ConfirmDialogModel(
            '',
            message
          );
          const dialogRef = this.dialog.open(DialogSuccessedComponent, {
            maxWidth: '400px',
            data: dialogData,
          });
      setTimeout(function() {
        dialogRef.close();
      }, 3000);
    
  }
  onCreate(): void {
    const dialogRef = this.dialog.open(AddCateComponent, {
      width: '400px',
    });
  }
  search() {
    this.productService
      .searchProduct(this.searchText)
      .subscribe((product: any) => {
        this.resultSearch = product;
      });
    console.log(this.searchText);
  }
  searchVoice(): void {
    this.voiceRecognitionService.init();
    this.voiceRecognitionService.start();
    this.voiceRecognitionService.text$.subscribe((text) => {
      this.searchText = text;
    });
  }

  cancelSearch(): void {
    this.voiceRecognitionService.stop();
    this.resultSearch = [];
  }
}
export interface PeriodicElement {
  // type: string;
  position: number;
  displayName: string;
}
