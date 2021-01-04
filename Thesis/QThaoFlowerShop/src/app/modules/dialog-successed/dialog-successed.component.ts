import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-successed',
  templateUrl: './dialog-successed.component.html',
  styleUrls: ['./dialog-successed.component.css']
})
export class DialogSuccessedComponent implements OnInit {
  title: string;
  message: string;
  constructor(public dialogRef: MatDialogRef<DialogSuccessedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
    this.title = data?.title;
    this.message = data?.message;
  }
  onConfirm(): void {
    this.dialogRef.close(true);
  }
  onDismiss(): void {
    this.dialogRef.close(false);
  }
  ngOnInit(): void {}

}
export class ConfirmDialogModel {
  constructor(public title: string, public message: string) {
  }
}
