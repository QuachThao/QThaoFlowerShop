import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from './../../services/account.service';
import { Component, OnInit, Inject } from '@angular/core';
import { UserDto } from 'src/app/models/user-dto';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
createForm: FormGroup;
user: UserDto = new UserDto();

  constructor(
    private service: AccountService,
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel
  ) { }

  ngOnInit(): void {
    this.service.getAllUsers();
    this.createrForm();
  }
  createrForm() {
    this.createForm = this.fb.group({
      userName: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      passWord: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(10),
        ],
      ],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      role: ['employee']
    });
  }
  onClear(): void {
    this.createForm.reset();
    // this.service.initializeFormGroup();
    // this.notificationService.success(':: Submitted successfully');
  }
  onSubmit(): void{
    const data = this.createForm.value;
    // tslint:disable-next-line: deprecation
    this.service.Save(data).subscribe();
    location.reload();
  }
  onClose(): void{
    this.createForm.reset();
    // this.service.initializeFormGroup();
    this.dialogRef.close(false);
  }
}

export class ConfirmDialogModel {
  constructor(public title: string, public message: string) {
  }
}
