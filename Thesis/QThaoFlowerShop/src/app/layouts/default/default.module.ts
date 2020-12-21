import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { SubCategoryComponent } from 'src/app/modules/sub-category/sub-category.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
 


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    SubCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatGridListModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    AutocompleteLibModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule

    
  ]
})
export class DefaultModule { }
