import { DialogSuccessedComponent } from './../dialog-successed/dialog-successed.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { BillService } from 'src/app/services/bill.service';
import { AccountService } from 'src/app/services/account.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dialog-payment-method',
  templateUrl: './dialog-payment-method.component.html',
  styleUrls: ['./dialog-payment-method.component.css'],
})
export class DialogPaymentMethodComponent implements OnInit {
  myControl = new FormControl();
  title: string;
  message: string;
  state$: Observable<object>;
  state: any;
  fullNameSender: '';
  phoneSender: '';
  emailSender: '';
  fullNameReceiver: '';
  phoneReceiver: '';
  adReceiver: '';
  constructor(
    public fb: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private product: ProductService,
    private bill: BillService,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<DialogPaymentMethodComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Update view with given values
    this.title = data?.title;
    this.message = data?.message;
  }
  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }
  onDismiss(): void {
    this.dialogRef.close(false);
  }
  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    );
    console.log(this.state$);
    this.state = window.history.state;
    console.log(this.state);
  }
  onCreate(): void {
    const message = `Thanh toán thành công!`;
    const dialogData = new ConfirmDialogModel(
      '',
      message
    );
    const dialogRef = this.dialog.open(DialogSuccessedComponent, {
      maxWidth: '400px',
      data: dialogData,
    });
    setTimeout(function () {
      dialogRef.close();
    }, 2000);
  }
  addToBill(): void {
    const accountId = this.accountService.getUser().id;
    const guide = this.state.guide;
    const note = this.state.note;
    const productIds = this.state.productIds;
    const quantity = this.state.quantity;
    const timeDelivery = this.state.time;
    const total = this.state.totalPrice;
    const productId = productIds[0];
    this.bill
      .Save(
        accountId,
        guide,
        note,
        productId,
        quantity,
        timeDelivery,
        total,
        this.fullNameSender,
        this.phoneSender,
        this.emailSender,
        this.fullNameReceiver,
        this.phoneReceiver,
        this.adReceiver
      )
      .subscribe();
  }
}
export class ConfirmDialogModel {
  constructor(public title: string, public message: string) {}
}
