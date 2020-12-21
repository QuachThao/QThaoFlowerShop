import { BillService } from './../../services/bill.service';
import { ProductService } from './../../services/product.service';
import { DialogLoginSuccessComponent } from './../dialog-login-success/dialog-login-success.component';
import { DialogPaymentMethodComponent } from './../dialog-payment-method/dialog-payment-method.component';
import { UserDto } from './../../models/user-dto';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { AddProductComponent } from '../add-product/add-product.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogPayOffComponent } from '../dialog-pay-off/dialog-pay-off.component';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-pre-payment',
  templateUrl: './pre-payment.component.html',
  styleUrls: ['./pre-payment.component.css'],
})
export class PrePaymentComponent implements OnInit {
  receiveForm: FormGroup;
  sendForm: FormGroup;
  user: UserDto = new UserDto();
  state$: Observable<object>;
  state: any;
  panelOpenState = false;


  constructor(
    public fb: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private product: ProductService,
    private bill: BillService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.receiverForm();
    this.senderForm();
    this.state$ = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    );
    console.log(this.state$);
    this.state = window.history.state;
    console.log(this.state);
  }
  receiverForm() {
    this.receiveForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    });
  }
  senderForm() {
    this.sendForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    });
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
  addToBill(): void{
        const accountId = this.accountService.getUser().id;
        const productIds = this.state.productIds;
        const note = this.state.note;
        const guide = this.state.guide;
        const total = this.state.totalPrice;
        const quantity = this.state.total;
        const timeDelivery = this.state.time;
        const productId = productIds[0];
        this.bill.Save(accountId, productId, note, guide, total, quantity, timeDelivery).subscribe();
    }
}
