import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { UserDto } from 'src/app/models/user-dto';
import { AccountService } from 'src/app/services/account.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css'],
})
export class DetailCustomerComponent implements OnInit {
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
  detailForm: FormGroup;
  user: UserDto = new UserDto();
  accountId: string;
  account: UserDto;
  total = 0;
  totalPrice = 0;
  fullName: string;
  constructor(
    private productService: ProductService,
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<DetailCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data)
    this.accountService.getAllUsers();
    this.detailCusForm();
    this.productService
      .getProductByAccountId(this.data)
      .subscribe((products) => {
        this.dataSource = products;
        this.total = products.reduce(
          (total, product) => total + product.quantity,
          0
        );
        this.totalPrice = products.reduce(
          (total, product: any) =>
            total + product.quantity * product.product.price,
          0
        );
      });

    this.detailForm.patchValue({
      fullName: this.data.fullName,
      email: this.data.email,
      gender: this.data.gender,
      address: this.data.address,
      phoneNumber: this.data.phoneNumber,
    });
  }
  detailCusForm() {
    this.detailForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    });
  }
  onClear(): void {
    this.detailForm.reset();
  }
  onSubmit(): void {
    const data = this.detailForm.value;
    this.accountService.Save(data).subscribe();
    location.reload();
  }
  onClose(): void {
    this.detailForm.reset();
    this.dialogRef.close(false);
  }
  onDelete(id: any): void {
    console.log('DELETE', id);
    this.productService.remove(id).subscribe();
    location.reload();
  }
}

export class ConfirmDialogModel {
  constructor(public title: string, public message: string) {}
}
export interface CartElement {
  img: string;
  position: number;
  product: string;
  quantity: string;
  price: string;
  total: string;
}
