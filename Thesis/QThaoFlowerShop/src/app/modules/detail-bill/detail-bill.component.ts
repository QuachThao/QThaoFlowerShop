import { BillDto } from './../../models/bill-dto';
import { BillService } from './../../services/bill.service';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-detail-bill',
  templateUrl: './detail-bill.component.html',
  styleUrls: ['./detail-bill.component.css']
})
export class DetailBillComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'fullNameSender',
    'phoneSender',
    'emailSender',
    'fullNameReceiver',
    'phoneReceiver',
    'adReceiver',
    'guide',
    'note',
    'timeDelivery'
  ];
  dataSource: any = new MatTableDataSource<ProductElement>(null);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private bill: BillService,
    public dialogRef: MatDialogRef<DetailBillComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BillDto
  ) { }

  ngOnInit(): void {
    this.bill.getAllBills().subscribe((bills) => {
      // this.dataSource = bills;
      console.log(this.dataSource)
    })
    this.dataSource.patchValue({
      fullNameSender: this.data.fullNameSender,
      phoneSender: this.data.fullNameSender,
      emailSender: this.data.emailSender,
      fullNameReceiver: this.data.emailSender,
      phoneReceiver: this.data.phoneReceiver,
      adReceiver: this.data.adReceiver,
      totalprice: this.data.total,
      quantity: this.data.quantity,
      guide: this.data.guide,
      note: this.data.note,
      timeDelivery: this.data.timeDelivery,
    });
  }
  onClose(): void{
    this.dialogRef.close(false);
  }
}
export class ConfirmDialogModel {
  constructor(public title: string, public message: string) {
  }
}
export interface ProductElement {
  customer: string;
  position: number;
  totalPrice: string;
  createOn: string;
  fullNameSender: string;
  phoneSender: string;
  emailSender: string;
  fullNameReceiver: string;
  phoneReceiver: string
  adReceiver: string;
  quantity: string;
}