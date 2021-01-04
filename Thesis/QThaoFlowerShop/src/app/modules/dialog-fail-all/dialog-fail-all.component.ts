import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-fail-all',
  templateUrl: './dialog-fail-all.component.html',
  styleUrls: ['./dialog-fail-all.component.css']
})
export class DialogFailAllComponent implements OnInit {

  title: string;
  message: string;
  constructor(public dialogRef: MatDialogRef<DialogFailAllComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
    this.title = data.title;
    this.message = data.message;
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