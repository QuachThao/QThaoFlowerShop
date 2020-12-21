import { DialogFailedComponent } from './../dialog-failed/dialog-failed.component';
import {
  ConfirmDialogModel,
  DialogAddSuccessfulComponent,
} from 'src/app/modules/dialog-add-successful/dialog-add-successful.component';
import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { UserDto } from 'src/app/models/user-dto';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginSuccessComponent } from '../dialog-login-success/dialog-login-success.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  user: UserDto = new UserDto();
  constructor(
    public fb: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.reactiveForm();
    this.regisForm();
  }
  reactiveForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      passWord: ['', [Validators.required]],
    });
  }
  regisForm() {
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required]],
      fullName: [this.user.fullName, [Validators.required]],
      email: [this.user.email, [Validators.required, Validators.email]],
      passWord: [this.user.passWord,[Validators.required,Validators.minLength(8),Validators.maxLength(10)]],
      // repeatPassWord: [this.user.repeatPassWord,[Validators.required,Validators.minLength(8),Validators.maxLength(10)],
      gender: [this.user.gender, [Validators.required]],
      address: [this.user.address, [Validators.required]],
      phoneNumber: [this.user.phoneNumber, [Validators.required]],
      role: ['customer']
    });
  }
  onSubmit(){
    const data = this.registerForm.value;
    this.accountService.Save(data).subscribe();
    console.log(data)
    // location.reload();
    // const dialogRef = this.dialog.open(DialogLoginSuccessComponent, {
    //   width: '400px',
    // });
  }
  /* Date */
  // date(e) {
  //   const convertDate = new Date(e.target.value).toISOString().substring(0, 10);
  //   this.myForm.get('dob').setValue(convertDate, {
  //     onlyself: true
  //   })
  // }
  submitForm() {
    console.log(this.loginForm.value);
    const userInfo = this.loginForm.value;
    this.accountService.login(userInfo).subscribe(
      (user) => {
        sessionStorage.setItem('user', JSON.stringify(user));
        console.log(user);
        const message = ``;
        const dialogData = new ConfirmDialogModel(
          'Đăng nhập thành công!',
          message
        );
        const dialogRef = this.dialog.open(DialogLoginSuccessComponent, {
          maxWidth: '400px',
          data: dialogData,
        });
        if (user.role === 'admin')
        {
          console.log('OK')
          this.router.navigate(['/', 'management']);
        }
        if (user.role === 'employee')
        {
          console.log('OK')
          this.router.navigate(['/', 'employee']);
        }
        if (user.role === 'customer')
        {
          console.log('OK')
          this.router.navigate(['/', '/']);
        }

        setTimeout(function() {
          dialogRef.close();
        }, 2000);
      },
      (err: HttpErrorResponse) => {
        // Failed
        console.log('LOGIN FAILED');
        const message = `Email hoặc mật khẩu không hợp lệ.`;
        const dialogData = new ConfirmDialogModel(
          'Đăng nhập thất bại!',
          message
        );
        const dialogRef = this.dialog.open(DialogFailedComponent, {
          maxWidth: '400px',
          data: dialogData,
        });
        setTimeout(function() {
          dialogRef.close();
        }, 3000);
      }
    );
  }
}
