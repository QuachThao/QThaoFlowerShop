import { DialogPayOffComponent } from './modules/dialog-pay-off/dialog-pay-off.component';
import { PrePaymentComponent } from './modules/pre-payment/pre-payment.component';
import { CreateEmployeeComponent } from './modules/create-employee/create-employee.component';
import { NgModule, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { FullwidthModule } from './layouts/fullwidth/fullwidth.module';
import { ManagerComponent } from './layouts/manager/manager.component';
import { SubCategoryComponent } from './modules/sub-category/sub-category.component';
import { DetailProductComponent } from './modules/detail-product/detail-product.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { BuyProductComponent } from './modules/buy-product/buy-product.component';
import { ManagementComponent } from './modules/management/management.component';
import { ProductManagementComponent } from './modules/product-management/product-management.component';
import { DiscountManagementComponent } from './modules/discount-management/discount-management.component';
import { StatisticsComponent } from 'src/app/modules/statistics/statistics.component';
import { EmployeeComponent } from 'src/app/modules/employee/employee.component';
import { EmployeeLayoutComponent } from 'src/app/layouts/employee-layout/employee-layout.component';
import { CartManagementComponent } from 'src/app/modules/cart-management/cart-management.component';
import { CustomerManagementComponent } from 'src/app/modules/customer-management/customer-management.component';
import { CustomerClassManagementComponent } from 'src/app/modules/customer-class-management/customer-class-management.component';
import { PaymentComponent } from './modules/payment/payment.component';




const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
      children: [{
        path: '',
        component: HomeComponent
      },
      {
        path: 'subCategory/:id',
        component: SubCategoryComponent
      }
    ]
  },
  {
    path: '',
    component: FullwidthComponent,
      children: [{
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'detailProduct',
        pathMatch: 'full',
        component: DetailProductComponent
      },
      {
        path: 'detailProduct/:id',
        component: DetailProductComponent
      },
      {
        path: 'buyProduct',
        component: BuyProductComponent
      },
      {
        path: 'prePayment',
        component: PrePaymentComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      }
    ]
  },
  {
    path: '',
    component: ManagerComponent,
      children: [{
        path: 'management',
        component: ManagementComponent
      },
      {
        path: 'productManagement',
        component: ProductManagementComponent
      },
      {
        path: 'discountManagement',
        component: DiscountManagementComponent
      },
      {
        path: 'statistics',
        component: StatisticsComponent
      },
      {
        path: 'createEmployee',
        component: CreateEmployeeComponent
      },
      {
        path: 'cartManagement',
        component: CartManagementComponent
      },
      {
        path: 'customerManagement',
        component: CustomerManagementComponent
      }
    ]
  }
  // {
  //   path: '',
  //   component: EmployeeLayoutComponent,
  //     children: [{
  //       path: 'employee',
  //       component: EmployeeComponent
  //     },
  //     {
  //       path: 'cartManagement',
  //       component: CartManagementComponent
  //     },
  //     {
  //       path: 'customerManagement',
  //       component: CustomerManagementComponent
  //     },
  //     {
  //       path: 'customerClassManagement',
  //       component: CustomerClassManagementComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
