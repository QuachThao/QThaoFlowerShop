import { BillDto } from './../../models/bill-dto';
import { DetailBillComponent } from './../detail-bill/detail-bill.component';
import { BillService } from './../../services/bill.service';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProductComponent } from '../update-product/update-product.component';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
})
export class BillComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'customer',
    'createOn',
    'quantity',
    'totalPrice',
    'actions',
  ];
  dataSource: any = new MatTableDataSource<ProductElement>(null);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialog: MatDialog, private bill: BillService) {}
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  onDetail(): void {
    const dialogRef = this.dialog.open(DetailBillComponent, {
      width: '400px',
    });
  }
  onEdit(data: BillDto): void{
    const dialogRef = this.dialog.open(DetailBillComponent, {
      width: '400px',
      data: data,
    });
    console.log(data)
  }
  ngOnInit(): void {
    this.bill.getAllBills().subscribe((bills) => {
      console.log(bills);
      this.dataSource = bills;
    });
    console.log(this.dataSource);
  }
}
export interface ProductElement {
  customer: string;
  position: number;
  quantity: string;
  totalPrice: string;
  createOn: string;
}
