import { DialogPaymentMethodComponent } from './../../modules/dialog-payment-method/dialog-payment-method.component';
import { OrderCustomerComponent } from './../../modules/order-customer/order-customer.component';
import { DetailCustomerComponent } from './../../modules/detail-customer/detail-customer.component';
import { UpdateProductComponent } from './../../modules/update-product/update-product.component';
import { UpdateEmployeeComponent } from './../../modules/update-employee/update-employee.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { CreateEmployeeComponent } from './../../modules/create-employee/create-employee.component';
import { StatisticsComponent } from './../../modules/statistics/statistics.component';
import { DiscountManagementComponent } from './../../modules/discount-management/discount-management.component';
import { ProductManagementComponent } from './../../modules/product-management/product-management.component';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { ManagementComponent } from 'src/app/modules/management/management.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CdkColumnDef } from '@angular/cdk/table';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { AddProductComponent } from 'src/app/modules/add-product/add-product.component';
import { CartManagementComponent } from 'src/app/modules/cart-management/cart-management.component';
import { CustomerManagementComponent } from 'src/app/modules/customer-management/customer-management.component';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { ChartsModule } from 'ng2-charts';



@NgModule({
    declarations: [
        ManagerComponent,
        ManagementComponent,
        ProductManagementComponent,
        DiscountManagementComponent,
        StatisticsComponent,
        CreateEmployeeComponent,
        UpdateEmployeeComponent,
        AddProductComponent,
        UpdateProductComponent,
        CartManagementComponent,
        CustomerManagementComponent,
        DetailCustomerComponent,
        OrderCustomerComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        FlexLayoutModule,
        MatTableModule,
        // MatPaginator,
        MatPaginatorModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatGridListModule,
        MatRadioModule,
        MatSelectModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatTabsModule,
        MatExpansionModule,
        Ng2SearchPipeModule,
        ChartsModule,
        ConfirmationPopoverModule.forRoot({
            confirmButtonType: 'danger', // set defaults here
          }),

    ],
    providers: [CdkColumnDef],
    bootstrap: [ManagerComponent],
    // entryComponents: [CreateEmployeeComponent]
})
export class ManagerModule { }
