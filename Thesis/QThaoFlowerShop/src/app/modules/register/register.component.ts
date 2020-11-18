import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/models/user-dto';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user: UserDto = new UserDto();
registerForm: FormGroup;
email = new FormControl('', [Validators.required, Validators.email]);
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      'userName': [this.user.userName, [
        Validators.required
      ]],
      'fullName': [this.user.fullName, [
        Validators.required
      ]],
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'passWord': [this.user.passWord, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10)
      ]],
      'gender': [this.user.gender, [
        Validators.required
      ]],
      'address': [this.user.address, [
        Validators.required
      ]],
      'phoneNumber': [this.user.phoneNumber, [
        Validators.required
      ]]
    });
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
