import { CartItemService } from './../../services/cart-item.service';
import { BillService } from 'src/app/services/bill.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from 'src/app/services/account.service';
import { DialogPayOffComponent } from '../dialog-pay-off/dialog-pay-off.component';
import { DialogPaymentMethodComponent } from '../dialog-payment-method/dialog-payment-method.component';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  state: any;
  fullNameSender: '';
  phoneSender: '';
  emailSender: '';
  fullNameReceiver: '';
  phoneReceiver: '';
  adReceiver: '';
  date: string;
  time: string;
  note: string;
  guide: string;
  quantity = 0;
  totalPrice = 0;
  panelOpenState = false;
  data: any;
  constructor(
    private dialog: MatDialog,
    private account: AccountService,
    private bill: BillService,
    private cartitem: CartItemService,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.state = window.history.state;
    console.log("STATE", this.state);
  }
  onCreateOnline(): void {
    const dialogRef = this.dialog.open(DialogPaymentMethodComponent, {
      width: '400px',
    });
  }
  onCreateOffline(): void {
    const dialogRef = this.dialog.open(DialogPayOffComponent, {
      width: '400px',
    });
  }
  addToBill(): void {
    console.log("bill",this.state)
    const accountId = this.account.getUser().id;
    const guide = this.state.guide;
    const note = this.state.note;
    // const productIds = this.state.productIds;
    const quantity = this.state.quantity;
    const timeDelivery = this.state.time;
    const total = this.state.totalPrice;
    const productId = this.state.products?.[0].product.id || 0;

    // console.log("Product id", productId)

    this.bill
      .Save(
        accountId,
        guide,
        note,
        productId,
        quantity,
        timeDelivery,
        total,
        this.state.fullNameSender,
        this.state.phoneSender,
        this.state.emailSender,
        this.state.fullNameReceiver,
        this.state.phoneReceiver,
        this.state.adReceiver,
      )
      .subscribe(() => {
        this.cartitem.clear(accountId).subscribe(location.reload);
      });
    // console.log(this.state);
  }
}
