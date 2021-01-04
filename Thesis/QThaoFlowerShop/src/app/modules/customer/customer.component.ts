import { ConfirmDialogModel } from './../dialog-fail-all/dialog-fail-all.component';
import { ChangePassComponent } from './../change-pass/change-pass.component';
import { UpdateEmployeeComponent } from './../update-employee/update-employee.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDto } from 'src/app/models/user-dto';
import { AccountService } from 'src/app/services/account.service';
import { DetailCustomerComponent } from '../detail-customer/detail-customer.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
fullName: string = '';
gender: string = '';
address: string = '';
phoneNumber: string = '';
email: string = '';
dataSource: any = new MatTableDataSource<PeriodicElement>(null);
  constructor(
    private account: AccountService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel
  ) { }

  ngOnInit(): void {
    this.fullName = this.account.getUser()?.fullName;
    this.gender = this.account.getUser()?.gender;
    this.address = this.account.getUser()?.address;
    this.phoneNumber = this.account.getUser()?.phoneNumber;
    this.email = this.account.getUser()?.email;
  }
  onEdit(data: UserDto): void{
    const dialogRef = this.dialog.open(UpdateEmployeeComponent, {
      width: '400px',
      data: data,
    });
  }
  onChangePass(pass: any):void{
    const dialogRef = this.dialog.open(ChangePassComponent, {
      width: '400px',
      data: pass,
    });
  }
}
export interface PeriodicElement {
  userName: string;
  position: number;
  fullName: string;
  gender: string;
  address: string;
  phoneNumber: string;
  email: string;
}