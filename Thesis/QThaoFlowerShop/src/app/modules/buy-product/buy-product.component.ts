import { CartItemService } from './../../services/cart-item.service';
import { AccountService } from './../../services/account.service';
import { ProductDto } from './../../models/product-dto';
import { ProductService } from './../../services/product.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css'],
  providers: []
})
export class BuyProductComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'img', 'product', 'quantity', 'price', 'total', 'actions'];
  dataSource: any = new MatTableDataSource<CartElement>(null);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  products: ProductDto[] = [];
  productByAccount: ProductDto[] = [];
  myControl = new FormControl();
  page = 0;
  size = 3;
  dataSource1: [];
  date: string;
  time: string;
  note: string;
  guide: string;
  total = 0;
  totalPrice = 0;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private accountService: AccountService,
    private cartitem: CartItemService,
    private router: Router
    ) {
    }
    ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
    }
  ngOnInit(): void {
    //this.getData({ pageIndex: this.page, pageSize: this.size });

    // this.productService.getAllProducts().subscribe(products => {
    //   this.dataSource = products;
    //   console.log(products);
    // });
    this.productService.getProductByAccountId(this.accountService.getUser().id).subscribe(products => {
      console.log(products)
      this.dataSource = products;
      this.total = products.reduce((total, product) => total + product.quantity, 0);
      this.totalPrice = products.reduce((total, product: any) => total + product.quantity * product.product.price, 0);
    });
  }
  onDelete(row: any): void {
    console.log('DELETE', row);
    this.cartitem.remove(row.id).subscribe(() => {
      location.reload();
    });
    // location.reload();
  }

  navigateWithState() {
    this.router.navigateByUrl('/prePayment', { state: { time: this.time, date: this.date, note: this.note, 
                                                      guide: this.guide, total: this.total, totalPrice: this.totalPrice,
                                                    productIds: this.dataSource.map(p => p.id) } });
  }
  // getData(obj: any): void {
  //   let index = 0;
  //   const startingIndex = obj.pageIndex * obj.pageSize;
  //   const endingIndex = startingIndex + obj.pageSize;

  //   this.dataSource1 = this.dataSource.filter(() => {
  //     index++;
  //     return index > startingIndex && index <= endingIndex ? true : false;
  //   });
  // }

}
export interface CartElement {
  img: string;
  position: number;
  product: string;
  quantity: string;
  price: string;
  total: string;
}