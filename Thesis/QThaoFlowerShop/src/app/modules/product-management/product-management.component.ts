import { ConfirmDialogModel } from './../update-employee/update-employee.component';
import { CategoryDto } from './../../models/category-dto';
import { CategoryService } from './../../services/category.service';
import { UpdateProductComponent } from './../update-product/update-product.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductDto } from 'src/app/models/product-dto';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { FormControl } from '@angular/forms';
import { VoiceRecognitionService } from 'src/app/services/voice-recognition.service';
import { DialogSuccessedComponent } from '../dialog-successed/dialog-successed.component';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'price', 'describe', 'review', 'url', 'actions'];
  dataSource: any = new MatTableDataSource<ProductElement>(null);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  popoverTitle = 'XOÁ SẢN PHẨM';
  popoverMessage = 'Bạn chắc là bạn muốn <b>xóa</b>?';
  confirmClicked = false;
  cancelClicked = false;

  products: ProductDto[]= [];
  panelOpenState = false;
  categories: CategoryDto[] = [];
  resultSearch: ProductDto[] = [];
  searchText;

  myControl = new FormControl();
  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private categoryService: CategoryService,
    public voiceRecognitionService: VoiceRecognitionService
  ) { }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  onCreate(): void{
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '400px',
    });
}
onEdit(data: ProductDto): void{
  const dialogRef = this.dialog.open(UpdateProductComponent, {
    width: '400px',
    data: data,
  });
  console.log(data)
}
onDelete(id: any): void {
  console.log('DELETE', id);
  this.productService.remove(id).subscribe();
  const message = `Đã xóa sản phẩm!`;
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
  location.reload();
}
search(){
  this.productService.searchProduct(this.searchText).subscribe((product: any) =>{
    this.resultSearch = product;
  });
  console.log(this.searchText)
}
searchVoice(): void {
  this.voiceRecognitionService.init();
  this.voiceRecognitionService.start();
  this.voiceRecognitionService.text$.subscribe(text => {
    this.searchText  = text;
  })
}

cancelSearch(): void {
  this.voiceRecognitionService.stop();
  this.resultSearch = [];
}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(products => {
      this.dataSource = products;
      console.log(products);
    });
    this.categoryService.getAllCategories().subscribe((cate) => {
      this.categories = cate;
      console.log(cate);
    });
  }

}
export interface ProductElement {
  name: string;
  position: number;
  price: string;
  describe: string;
  review: string;
  url: string;
  // component: string;
}