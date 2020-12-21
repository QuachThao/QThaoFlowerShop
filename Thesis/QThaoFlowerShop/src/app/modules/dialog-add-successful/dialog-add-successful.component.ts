import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-successful',
  templateUrl: './dialog-add-successful.component.html',
  styleUrls: ['./dialog-add-successful.component.css']
})
export class DialogAddSuccessfulComponent implements OnInit {
  title: string;
  message: string;
  constructor(public dialogRef: MatDialogRef<DialogAddSuccessfulComponent>,
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

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
export class ConfirmDialogModel {
  constructor(public title: string, public message: string) {
  }
}
