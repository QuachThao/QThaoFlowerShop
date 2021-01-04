import { CartitemComponent } from './../../modules/cartitem/cartitem.component';
import { CustomerComponent } from './../../modules/customer/customer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CustomerManagementComponent } from './../../modules/customer-management/customer-management.component';
import { EmployeeLayoutComponent } from './employee-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    EmployeeLayoutComponent,
    CustomerComponent,
    CartitemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    FlexLayoutModule,
    // MatTableDataSource,
    MatTableModule
  ],
  // exports: [RouterModule],
  providers: [],
  bootstrap: [EmployeeLayoutComponent]
})
export class EmployeeModule { }
