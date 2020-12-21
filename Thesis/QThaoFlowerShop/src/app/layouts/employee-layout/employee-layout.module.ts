import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CustomerManagementComponent } from './../../modules/customer-management/customer-management.component';
import { CustomerClassManagementComponent } from './../../modules/customer-class-management/customer-class-management.component';
import { CartManagementComponent } from './../../modules/cart-management/cart-management.component';
import { EmployeeLayoutComponent } from './employee-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from 'src/app/modules/employee/employee.component';



@NgModule({
  declarations: [
    EmployeeLayoutComponent,
    EmployeeComponent,
    CustomerClassManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    FlexLayoutModule,
  ],
  // exports: [RouterModule],
  providers: [],
  bootstrap: [EmployeeLayoutComponent]
})
export class EmployeeModule { }
