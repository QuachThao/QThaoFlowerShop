import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserDto } from 'src/app/models/user-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm: FormGroup;
 registerForm: FormGroup;
 user: UserDto = new UserDto();
  constructor(
    public fb: FormBuilder)
  { }

  ngOnInit(): void {
    this.reactiveForm();
    this.regisForm();
  } 
  reactiveForm() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      passWord: ['', [Validators.required]],
    })
}
regisForm(){
  this.registerForm = this.fb.group({
      userName: ['', [Validators.required]],
      fullName: [this.user.fullName, [Validators.required]],
      email: [this.user.email, [Validators.required, Validators.email]],
      passWord: [this.user.passWord, [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      gender: [this.user.gender, [Validators.required]],
      address: [this.user.address, [Validators.required]],
      phoneNumber: [this.user.phoneNumber, [Validators.required]]
  })
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
  }
}
