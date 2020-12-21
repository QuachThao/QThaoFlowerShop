import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-dialog-pay-off',
  templateUrl: './dialog-pay-off.component.html',
  styleUrls: ['./dialog-pay-off.component.css'],
})
export class DialogPayOffComponent implements OnInit {
  myControl = new FormControl();
  title: string;
  message: string;
  constructor(
    public dialogRef: MatDialogRef<DialogPayOffComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
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

  openPDF() {
    const doc = new jsPDF();
    // doc.text('', 10, 10);
    // doc.save('QThaoFlowerShop_bill.pdf');
    // var doc = new jsPDF();

    doc.html(
      '<span>botextvo</span>', 
      {
      callback: function (doc) {
        doc.save('QThaoFlowerShop_bill.pdf');
      },
      x: 10,
      y: 10,
    });
  }
}

export class ConfirmDialogModel {
  constructor(public title: string, public message: string) {}
}
