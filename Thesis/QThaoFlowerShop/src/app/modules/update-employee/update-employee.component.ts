import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDto } from './../../models/user-dto';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogSuccessedComponent } from '../dialog-successed/dialog-successed.component';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

updateForm: FormGroup;
user: UserDto = new UserDto();
accountId: string;
account: UserDto;
  constructor(
    private service: AccountService,
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<UpdateEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserDto
  ) { }

  ngOnInit(): void {
    this.service.getAllUsers();
    this.updateEmployeeForm();

    this.updateForm.patchValue({
      fullName: this.data.fullName,
      email: this.data.email,
      gender: this.data.gender,
      address: this.data.address,
      phoneNumber: this.data.phoneNumber,
    })
  }
  updateEmployeeForm() {
    this.updateForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    });
  }
  onClear(): void {
    this.updateForm.reset();
    // this.service.initializeFormGroup();
    // this.notificationService.success(':: Submitted successfully');
  }
  onSubmit(): void{
    const data = this.updateForm.value;
    // tslint:disable-next-line: deprecation
    this.service.Save(data).subscribe();
    location.reload();
  }
  onClose(): void{
    this.updateForm.reset();
    // this.service.initializeFormGroup();
    this.dialogRef.close(false);
  }
  onCreate(): void {
    const message = `Cập nhật thông tin thành công!`;
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
}

export class ConfirmDialogModel {
  constructor(public title: string, public message: string) {
  }

}
