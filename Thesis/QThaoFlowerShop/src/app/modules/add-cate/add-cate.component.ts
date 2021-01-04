import { CategoryDto } from './../../models/category-dto';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import { DialogSuccessedComponent } from '../dialog-successed/dialog-successed.component';

@Component({
  selector: 'app-add-cate',
  templateUrl: './add-cate.component.html',
  styleUrls: ['./add-cate.component.css']
})
export class AddCateComponent implements OnInit {
  addsForm: FormGroup;
  category: CategoryDto[] = [];
  constructor(
    public fb: FormBuilder,
    private dialog: MatDialog,
    private cate: CategoryService,
    public dialogRef: MatDialogRef<AddCateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel
  ) { }

  ngOnInit(): void {
    this.addForm();
    this.cate.getAllCategories().subscribe(categories =>{
      this.category = categories;
      console.log(this.category)
    })
  }
  addForm() {
    this.addsForm = this.fb.group({
      name: ['', [Validators.required]],
      displayName: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });
  }
  onClear(): void {
    this.addsForm.reset();
  }
  onClose(): void{
    this.addsForm.reset();
    this.dialogRef.close(false);
  }
  onSubmit(): void{
    // if(this.addsForm.invalid){
    //   return alert('Vui lòng nhập đầy đủ thông tin! ')
    // }
    const data = this.addsForm.value;
    console.log("data form",data)
    this.cate.save(data).subscribe();
    location.reload();
    const message = `Thêm loại sản phẩm thành công!`;
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
    this.dialogRef.close(false);
   
  }

}
export class ConfirmDialogModel {
  constructor(public title: string, public message: string) {
  }
}
