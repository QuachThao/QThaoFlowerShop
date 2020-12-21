import { ProductService } from './../../services/product.service';
import { ProductDto } from './../../models/product-dto';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  updateForm: FormGroup;
  productId: string;
  constructor(
    private product: ProductService,
    public fb: FormBuilder,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<UpdateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductDto
  ) { }

  ngOnInit(): void {
    this.product.getAllProducts();
    this.updateProductForm();

    this.updateForm.patchValue({
      name: this.data.name,
      price: this.data.price,
      describe: this.data.describe,
      review: this.data.review,
      url: this.data.url,
      component: this.data.component
    })
  }
  updateProductForm() {
    this.updateForm = this.fb.group({
      id: [this.data.id],
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      describe: ['', [Validators.required]],
      review: ['', [Validators.required]],
      url: ['', [Validators.required]],
      component: ['', [Validators.required]]
    });
  }
  onClear(): void {
    this.updateForm.reset();
  }
  onSubmit(): void{
    const data = this.updateForm.value;
    this.product.Update(data).subscribe();
    location.reload();
  }
  onClose(): void{
    this.updateForm.reset();
    this.dialogRef.close(false);
  }
}
