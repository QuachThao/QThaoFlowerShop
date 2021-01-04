import { MatTableDataSource } from '@angular/material/table';
import { CartItemService } from './../../services/cart-item.service';
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
import { ActivatedRoute, Router } from '@angular/router';
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
  receiveForm: FormGroup;
  sendForm: FormGroup;
  user: UserDto = new UserDto();
  state$: Observable<object>;
  state: any;
  fullNameSender: string ='';
  phoneSender: string ='';
  emailSender: string ='';
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
  fullName: string ='';
  phoneNumber: string ='';
  email: string = '';
data: any;
  constructor(
    public fb: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private product: ProductService,
    private bill: BillService,
    private cartitem: CartItemService,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.receiverForm();
    this.senderForm();
    this.state$ = this.activatedRoute.paramMap.pipe(
      map(() => { 
        // this.state = window.history.state;
        return window.history.state })
    );
    this.state = window.history.state;
    console.log("Pre payment state", this.state);
    this.fullNameSender = this.accountService.getUser()?.fullName;
    this.phoneSender = this.accountService.getUser()?.phoneNumber;
    this.emailSender = this.accountService.getUser()?.email;

  }
  receiverForm() {
    this.receiveForm = this.fb.group({
      fullName: ['', [Validators.required]],
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
        this.adReceiver,
      )
      .subscribe(() => {
        this.cartitem.clear(accountId).subscribe(location.reload);
      });
    console.log(this.state);
  }
  navigateWithState() {
    // if(this.sendForm.invalid){
    //   return alert('Vui lòng nhập thông tin!')
    // }
    console.log(this.state.data)
    this.router.navigateByUrl('/payment', {
      state: {
        time: this.time,
        date: this.date,
        note: this.note,
        guide: this.guide,
        quantity: this.state.quantity,
        totalPrice: this.state.totalPrice,
        fullNameSender: this.fullNameSender,
        phoneSender: this.phoneSender,
        emailSender: this.emailSender,
        fullNameReceiver: this.fullNameReceiver,
        phoneReceiver: this.phoneReceiver,
        adReceiver: this.adReceiver,
        products: this.state.data,
      },
    });
  }
  getErrorFullname() {
    if (this.sendForm.get('fullName').invalid) {
      return 'Vui lòng nhập họ tên!';
    }
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