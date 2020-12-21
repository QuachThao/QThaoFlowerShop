import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-login-success',
  templateUrl: './dialog-login-success.component.html',
  styleUrls: ['./dialog-login-success.component.css']
})
export class DialogLoginSuccessComponent implements OnInit {

  title: string;
  message: string;
  constructor(public dialogRef: MatDialogRef<DialogLoginSuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
    // Update view with given values
    this.title = data?.title;
    this.message = data?.message;
  }
  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }
  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
  ngOnInit(): void {}

}
export class ConfirmDialogModel {
  constructor(public title: string, public message: string) {
  }
}
