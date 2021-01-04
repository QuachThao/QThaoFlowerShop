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
  AbstractControl,
} from '@angular/forms';
import { UserDto } from 'src/app/models/user-dto';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginSuccessComponent } from '../dialog-login-success/dialog-login-success.component';
import { DialogSuccessedComponent } from '../dialog-successed/dialog-successed.component';

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
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      passWord: [
        '',
        [
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}'),
          Validators.minLength(8),
          Validators.maxLength(10),
        ],
      ],
      //Validators.pattern('?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,10}$')
      repassWord: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(10),
        ],
      ],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^([0-9]*)$')]],
      role: ['customer'],
    });
  }
  onSubmit() {
    if(this.registerForm.invalid){
      return alert('Thông tin không hợp lệ!')
    }
    if (
      this.registerForm.value.passWord != this.registerForm.value.repassWord
    ) {
      return alert('Mật khẩu không trùng khớp!');
    }
    const data = this.registerForm.value;
    this.accountService.Save(data).subscribe();
    console.log("user",data);
    const message = `Đăng ký thành công!.`;
    const dialogData = new ConfirmDialogModel('', message);
    const dialogRef = this.dialog.open(DialogSuccessedComponent, {
      maxWidth: '400px',
      data: dialogData,
    });
    setTimeout(function () {
      dialogRef.close();
    }, 3000);
    location.reload();
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
        if (user.role === 'admin') {
          console.log('OK');
          this.router.navigate(['/', 'management']);
        }
        if (user.role === 'customer') {
          console.log('OK');
          this.router.navigate(['/', 'customer']);
        }

        setTimeout(function () {
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
        setTimeout(function () {
          dialogRef.close();
        }, 3000);
      }
    );
  }
  onCreate(): void {
    const dialogRef = this.dialog.open(DialogSuccessedComponent, {
      width: '400px',
    });
  }
  getErrorMessage() {
    if (this.registerForm.get('email').invalid) {
      return 'Vui lòng nhập email đúng định dạng!';
    }
  }
  getErrorMessagePhone() {
    if (this.registerForm.get('phoneNumber').invalid) {
      return 'Vui lòng nhập số';
    }
  }
  getErrorMessagePass() {
    if (this.registerForm.get('passWord').invalid) {
      return 'Mật khẩu ít nhất 8 ký tự, có chứa 1 kí tự số, 1 kí tự thường, 1 kí tự hoa và không chứa kí tự đặc biệt!';
    }
  }
}
