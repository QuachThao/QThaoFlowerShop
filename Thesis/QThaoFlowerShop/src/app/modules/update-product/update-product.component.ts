import { CategoryService } from './../../services/category.service';
import { ConfirmDialogModel } from './../update-employee/update-employee.component';
import { ProductService } from './../../services/product.service';
import { ProductDto } from './../../models/product-dto';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogSuccessedComponent } from '../dialog-successed/dialog-successed.component';
import { CategoryDto } from 'src/app/models/category-dto';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  updateForm: FormGroup;
  productId: string;
  category: CategoryDto[] = [];
  constructor(
    private product: ProductService,
    private cate: CategoryService,
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<UpdateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductDto
  ) {}

  ngOnInit(): void {
    this.product.getAllProducts();
    this.cate.getAllCategories().subscribe(categories =>{
      this.category = categories;
    })
    this.updateProductForm();

    this.updateForm.patchValue({
      name: this.data.name,
      price: this.data.price,
      describe: this.data.describe,
      review: this.data.review,
      url: this.data.url,
      categoryid: this.data.categoryId,
    });
  }
  updateProductForm() {
    this.updateForm = this.fb.group({
      id: [this.data.id],
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      describe: ['', [Validators.required]],
      review: ['', [Validators.required]],
      url: ['', [Validators.required]],
      categoryid: ['', [Validators.required]]
    });
  }
  onClear(): void {
    this.updateForm.reset();
  }
  onSubmit(): void {
    const data = this.updateForm.value;
    this.product.Update(data).subscribe();
    location.reload();
    const message = `Cập nhật thành công!`;
        const dialogData = new ConfirmDialogModel(
          '',
          message
        );
        const dialogRef = this.dialog.open(DialogSuccessedComponent, {
          maxWidth: '400px',
          data: dialogData,
        });
    setTimeout(function() {
      dialogRef.close();
    }, 3000);
    
  }
  onClose(): void {
    // this.updateForm.reset();
    this.dialogRef.close(false);
  }
  onCreate(){
        const dialogRef = this.dialog.open(DialogSuccessedComponent, {
          maxWidth: '400px',
          // data: dialogData,
        });
    setTimeout(function() {
      dialogRef.close();
    }, 3000);
    // location.reload();
  }
}
