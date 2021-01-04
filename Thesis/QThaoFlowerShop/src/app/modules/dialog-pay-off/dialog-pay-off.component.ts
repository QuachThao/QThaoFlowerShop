import { CartItemService } from './../../services/cart-item.service';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { jsPDF } from 'jspdf';
import { AccountService } from 'src/app/services/account.service';
import { BillService } from 'src/app/services/bill.service';
import { ProductService } from 'src/app/services/product.service';
import { DialogSuccessedComponent } from '../dialog-successed/dialog-successed.component';

@Component({
  selector: 'app-dialog-pay-off',
  templateUrl: './dialog-pay-off.component.html',
  styleUrls: ['./dialog-pay-off.component.css'],
})
export class DialogPayOffComponent implements OnInit {
  myControl = new FormControl();
  title: string;
  message: string;
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
    private cartitem: CartItemService,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<DialogPayOffComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data?.title;
    this.message = data?.message;
  }
  onConfirm(): void {
    this.dialogRef.close(true);
  }
  onDismiss(): void {
    this.dialogRef.close(false);
  }
  ngOnInit(): void {}
  
  openPDF() {
    const doc = new jsPDF();
    doc.html(
      'HÓA ĐƠN,Sản phẩm:,Số lượng:,Tổng cộng:<br>', 
    {
      callback: function (doc) {
        doc.save('QThaoFlowerShop_bill.pdf');
      },
      x: 10,
      y: 10,
    });
  }
  onCreate(): void {
    const message = `Đã in hóa đơn!.`;
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
  onDelete(row: any): void {
    console.log('DELETE', row);
    this.cartitem.remove(row.id).subscribe(() => {
      location.reload();
    });
    // location.reload();
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
