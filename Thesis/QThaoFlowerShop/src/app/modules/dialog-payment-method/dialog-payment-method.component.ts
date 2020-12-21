import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  styleUrls: ['./dialog-payment-method.component.css']
})
export class DialogPaymentMethodComponent implements OnInit {
  myControl = new FormControl();
  title: string;
  message: string;
  state$: Observable<object>;
  state: any;
  constructor(
    public fb: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private product: ProductService,
    private bill: BillService,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<DialogPaymentMethodComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    // Update view with given values
    this.title = data?.title;
    this.message = data?.message;
  }
  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }
  onDismiss(): void {
    // Close the dialog, return false
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

  addToBill(): void{
    const accountId = this.accountService.getUser().id;
    const productIds = this.state.productIds;
    const note = this.state.note;
    const guide = this.state.guide;
    const total = this.state.totalPrice;
    const quantity = this.state.total;
    const timeDelivery = this.state.time;
    const productId = productIds[0];
    this.bill.Save( productId, accountId, quantity, note, guide, timeDelivery, total).subscribe();
}
}
export class ConfirmDialogModel {
  constructor(public title: string, public message: string) {
  }
}
