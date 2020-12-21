import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-failed',
  templateUrl: './dialog-failed.component.html',
  styleUrls: ['./dialog-failed.component.css']
})
export class DialogFailedComponent implements OnInit {

  title: string;
  message: string;
  constructor(public dialogRef: MatDialogRef<DialogFailedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
    // Update view with given values
    this.title = data.title;
    this.message = data.message;
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
