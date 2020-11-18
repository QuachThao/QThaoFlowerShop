import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, FormBuilder,  FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
})
export class DetailProductComponent implements OnInit {
  inputnumber = 1;
  currentRate = 0;
  formGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) {
    this.formGroup = this.fb.group({
      emailField: ['', [Validators.required, Validators.email]],
      feedback: ['', [Validators.required, Validators.minLength(25), Validators.maxLength(300)]]
  });
  }
 matcher = new MyErrorStateMatcher();
  onSubmit(): void{
    this.formGroup.reset();
  }

  get emailField(): AbstractControl {
    return this.formGroup.get('emailField');
  }

  get feedbackField(): AbstractControl {
    return this.formGroup.get('feedbackField');
  }
  ngOnInit(): void {
  }
  add(): void {
    this.inputnumber = this.inputnumber + 1;
  }
  remove(): void {
    if (this.inputnumber !== 0) {
      this.inputnumber = this.inputnumber - 1;
    }
  }
}
