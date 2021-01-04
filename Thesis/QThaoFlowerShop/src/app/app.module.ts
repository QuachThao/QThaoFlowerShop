import { EmployeeModule } from './layouts/employee-layout/employee-layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DefaultModule } from './layouts/default/default.module';
import { FullwidthModule } from './layouts/fullwidth/fullwidth.module';
import { ManagerModule } from './layouts/manager/manager.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DialogFailAllComponent } from './modules/dialog-fail-all/dialog-fail-all.component';
import { StripeComponent } from './modules/stripe/stripe.component';
import { StripeModule } from "stripe-angular";
import { BillComponent } from './modules/bill/bill.component';
import { CartitemComponent } from './modules/cartitem/cartitem.component';
import { ChangePassComponent } from './modules/change-pass/change-pass.component';
import { DetailBillComponent } from './modules/detail-bill/detail-bill.component';
import { UpdateCateComponent } from './modules/update-cate/update-cate.component';
import { AddCateComponent } from './modules/add-cate/add-cate.component';






@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullwidthModule,
    ManagerModule,
    EmployeeModule,
    MatCardModule,
    //NgModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    MatSlideToggleModule,
    HttpClientModule,
    SlickCarouselModule,
    //StripeModule.forRoot("pk_test_51I0332K2e4L4TbBftvda7Lc54R5QhPQXPVrMWWkYQmBADwbIMUSTynYRWY51oyXGyf4GcS9s1HGQznbDfVo48bP100MdR94Zri")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
