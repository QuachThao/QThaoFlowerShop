import { DetailCustomerComponent } from './../detail-customer/detail-customer.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/models/user-dto';
import { AccountService } from 'src/app/services/account.service';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css'],
})
export class CustomerManagementComponent implements OnInit {
  displayedColumns: string[] = ['position', 'userName', 'fullName', 'gender', 'address', 'phoneNumber', 'email', 'actions'];
  dataSource: any = new MatTableDataSource<PeriodicElement>(null);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  myControl = new FormControl();
  searchText;

  constructor(
    private router: Router,
    private accountService: AccountService,
    private dialog: MatDialog
  ) {}
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.accountService.getUsersByRole().subscribe(accounts => {
      this.dataSource = accounts;
      console.log(accounts);
    });
  }
  onCreate(): void{
    const dialogRef = this.dialog.open(DetailCustomerComponent, {
      width: '400px',
    });
}
onEdit(data: UserDto): void{
  const dialogRef = this.dialog.open(DetailCustomerComponent, {
    width: '400px',
    data: data,
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