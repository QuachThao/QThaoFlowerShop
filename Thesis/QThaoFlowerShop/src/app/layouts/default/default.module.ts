import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { BirthdayComponent } from 'src/app/modules/birthday/birthday.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    BirthdayComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatGridListModule,
    MatIconModule,
    MatPaginatorModule
  ]
})
export class DefaultModule { }
