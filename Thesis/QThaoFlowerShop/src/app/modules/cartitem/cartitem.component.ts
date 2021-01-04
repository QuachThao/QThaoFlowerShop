import { CartItemService } from './../../services/cart-item.service';
import { AccountService } from './../../services/account.service';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'img',
    'product',
    'quantity',
    'price',
    'total',
    'actions',
  ];
  dataSource: any = new MatTableDataSource<CartElement>(null);
  quantity = 0;
  totalPrice = 0;
  fullname: string = '';
  constructor(
    private productService: ProductService,
    private accountService: AccountService,
    private cartitem: CartItemService
  ) { }

  ngOnInit(): void {
    this.productService
      .getProductByAccountId(this.accountService.getUser().id)
      .subscribe((products) => {
        console.log(products);
        this.dataSource = products;
        this.quantity = products.reduce(
          (total, product) => total + product.quantity,
          0
        );
        this.totalPrice = products.reduce(
          (total, product: any) =>
            total + product.quantity * product.product.price,
          0
        );
      });
    this.fullname = this.accountService.getUser()?.fullName;
  }
  onDelete(row: any): void {
    console.log('DELETE', row);
    this.cartitem.remove(row.id).subscribe(() => {
      location.reload();
    });
  }

}
export interface CartElement {
  img: string;
  position: number;
  product: string;
  quantity: string;
  price: string;
  total: string;
}