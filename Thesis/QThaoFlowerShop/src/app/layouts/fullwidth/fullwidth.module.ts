import { MatCheckboxModule } from '@angular/material/checkbox';
import { PrePaymentComponent } from './../../modules/pre-payment/pre-payment.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DialogLoginSuccessComponent } from './../../modules/dialog-login-success/dialog-login-success.component';
import { DialogFailedComponent } from './../../modules/dialog-failed/dialog-failed.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { ButtonsModule, InputsModule } from 'ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DateAdapter, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { FullwidthComponent } from './fullwidth.component';
import { MatStepperModule } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { LoginComponent } from 'src/app/modules/login/login.component';
import { RegisterComponent } from 'src/app/modules/register/register.component';
import { DetailProductComponent } from 'src/app/modules/detail-product/detail-product.component';
import { BuyProductComponent } from 'src/app/modules/buy-product/buy-product.component';
import { DialogAddSuccessfulComponent } from 'src/app/modules/dialog-add-successful/dialog-add-successful.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { DialogPaymentMethodComponent } from 'src/app/modules/dialog-payment-method/dialog-payment-method.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DialogPayOffComponent } from 'src/app/modules/dialog-pay-off/dialog-pay-off.component';


@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent,
    RegisterComponent,
    DetailProductComponent,
    BuyProductComponent,
    PrePaymentComponent,
    DialogAddSuccessfulComponent,
    DialogFailedComponent,
    DialogLoginSuccessComponent,
    DialogPaymentMethodComponent,
    DialogPayOffComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    // InputsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    MatGridListModule,
    MatTabsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SlickCarouselModule,
    MatPaginatorModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatExpansionModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    })
  ],
  providers: [ MatDatepickerModule,
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    },
    MatDatepickerModule
  ],
  exports: [SlickCarouselModule, MatPaginatorModule]
})
export class FullwidthModule { }
