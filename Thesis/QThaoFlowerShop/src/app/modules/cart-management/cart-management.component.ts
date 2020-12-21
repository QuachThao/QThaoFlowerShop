import { BillService } from './../../services/bill.service';
import { CartItemService } from './../../services/cart-item.service';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/models/user-dto';
import { AccountService } from 'src/app/services/account.service';
import { DetailCustomerComponent } from '../detail-customer/detail-customer.component';

@Component({
  selector: 'app-cart-management',
  templateUrl: './cart-management.component.html',
  styleUrls: ['./cart-management.component.css']
})
export class CartManagementComponent implements OnInit {
  displayedColumns: string[] = ['position', 'date', 'fullName', 'userName'];
  dataSource: any = new MatTableDataSource<PeriodicElement>(null);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  panelOpenState = false;

  constructor(
    private router: Router,
    private accountService: AccountService,
    private productService: ProductService,
    private cartItemservice: CartItemService,
    private billService: BillService,
    private dialog: MatDialog
  ) { }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.billService.getAllBills().subscribe(bills => {
      console.log("Itme", bills)
      this.dataSource = bills;
      console.log(bills);
    });
  }
  onDetail(data: UserDto): void{
    const dialogRef = this.dialog.open(DetailCustomerComponent, {
      width: '400px',
      data: data,
    });
  }
}
export interface PeriodicElement {
  userName: string;
  position: number;
  fullName: string;
  date: string;
}