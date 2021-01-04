import { HttpClient } from '@angular/common/http';
import { CategoryDto } from './../../models/category-dto';
import { CategoryService } from './../../services/category.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDto } from 'src/app/models/user-dto';
import { ProductService } from 'src/app/services/product.service';
import { DialogSuccessedComponent } from '../dialog-successed/dialog-successed.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addsForm: FormGroup;
  product: UserDto = new UserDto();
  category: CategoryDto[] = [];

  urlLink: string="assets/image/birthday/1.png";
  selectFiles(event){
    if(event.target.file){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        this.urlLink = event.target.result
      }
    }
  }

  constructor(
    private http: HttpClient,
    private productService: ProductService,
    public fb: FormBuilder,
    private dialog: MatDialog,
    private cate: CategoryService,
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts();
    this.addForm();
    this.cate.getAllCategories().subscribe(categories =>{
      this.category = categories;
      console.log(this.category)
    })
  }
  addForm() {
    this.addsForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      describe: ['', [Validators.required]],
      review: ['', [Validators.required]],
      url: ['', [Validators.required]],
      categoryid: ['', [Validators.required]]
    });
  }
  onClear(): void {
    this.addsForm.reset();
  }
  onSubmit(): void{
    if(this.addsForm.invalid){
      return alert('Vui lòng nhập đầy đủ thông tin! ')
    }
    const data = this.addsForm.value;
    this.productService.Save(data).subscribe();
    // location.reload();
    const message = `Thêm sản phẩm thành công!`;
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
    console.log(data);
    this.dialogRef.close(false);
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
