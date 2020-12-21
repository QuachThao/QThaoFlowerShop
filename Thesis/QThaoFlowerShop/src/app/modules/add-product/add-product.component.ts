import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDto } from 'src/app/models/user-dto';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addsForm: FormGroup;
  product: UserDto = new UserDto();
  constructor(
    private productService: ProductService,
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts();
    this.addForm();
  }
  addForm() {
    this.addsForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      describe: ['', [Validators.required]],
      review: ['', [Validators.required]],
      url: ['', [Validators.required]],
      component: ['', [Validators.required]]
    });
  }
  onClear(): void {
    this.addsForm.reset();
  }
  onSubmit(): void{
    const data = this.addsForm.value;
    this.productService.Save(data).subscribe();
    location.reload();
  }
  onClose(): void{
    this.addsForm.reset();
    this.dialogRef.close(false);
  }
}
export class ConfirmDialogModel {
  constructor(public title: string, public message: string) {
  }
}
