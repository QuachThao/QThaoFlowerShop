import { DialogLoginSuccessComponent } from './../dialog-login-success/dialog-login-success.component';
import { DialogFailedComponent } from './../dialog-failed/dialog-failed.component';
import { UpdateEmployeeComponent } from './../update-employee/update-employee.component';
import { CreateEmployeeComponent, ConfirmDialogModel } from './../create-employee/create-employee.component';
import { MatPaginator } from '@angular/material/paginator';
import { AccountService } from './../../services/account.service';
import { UserDto } from './../../models/user-dto';
import { Router } from '@angular/router';
import { AfterViewInit, Component, ViewChild, OnInit, Inject, TrackByFunction } from '@angular/core';
import {FormControl} from '@angular/forms';
import {from, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  // animal: string;
  // name: string;
}

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements AfterViewInit, OnInit{
  displayedColumns: string[] = ['position', 'userName', 'fullName', 'gender', 'address', 'phoneNumber', 'email', 'actions'];
  dataSource: any = new MatTableDataSource<PeriodicElement>(null);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  accounts: UserDto[] = [];
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
 
  popoverTitle = 'XOÁ NHÂN VIÊN';
  popoverMessage = 'Bạn chắc là bạn muốn <b>xóa</b>?';
  confirmClicked = false;
  cancelClicked = false;

  constructor(
    private router: Router,
    private accountService: AccountService,
    private dialog: MatDialog
  ) { }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  logout(): void {
    sessionStorage.removeItem('user');
    this.router.navigateByUrl('/');
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  ngOnInit(): void {
    this.accountService.getUsersByRole().subscribe(accounts => {
      this.dataSource = accounts;
      console.log(accounts);
    });
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  onCreate(): void{
        const dialogRef = this.dialog.open(CreateEmployeeComponent, {
          width: '400px',
        });
  }

  onEdit(data: UserDto): void{
    const dialogRef = this.dialog.open(UpdateEmployeeComponent, {
      width: '400px',
      data: data,
    });
  }

  onDelete(id: any): void {
    console.log('DELETE', id);
    this.accountService.remove(id).subscribe();
    location.reload();
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


