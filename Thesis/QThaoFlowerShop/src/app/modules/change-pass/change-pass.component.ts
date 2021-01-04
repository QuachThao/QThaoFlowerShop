import { AccountService } from './../../services/account.service';
import { ConfirmDialogModel } from './../dialog-fail-all/dialog-fail-all.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import { AddCateComponent } from '../add-cate/add-cate.component';
import { DialogSuccessedComponent } from '../dialog-successed/dialog-successed.component';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  addsForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private dialog: MatDialog,
    private cate: CategoryService,
    private account: AccountService,
    public dialogRef: MatDialogRef<AddCateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel
  ) { }

  ngOnInit(): void {
    this.addForm();
  }
  addForm() {
    this.addsForm = this.fb.group({
      oldPass: ['', [Validators.required]],
      newPass: ['', [Validators.required]],
      reNewPass: ['', [Validators.required]],
    });
  }
  onClose():void{
    this.addsForm.reset();
    this.dialogRef.close(false);
  }
  onSubmit():void{
    const data = this.addsForm.value;
    console.log("data form",data)
    this.account.changePass(data).subscribe();
    location.reload();
    const message = `Đổi mật khẩu thành công!`;
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
