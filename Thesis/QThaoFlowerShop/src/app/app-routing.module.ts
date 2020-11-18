import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { FullwidthModule } from './layouts/fullwidth/fullwidth.module';
import { BirthdayComponent } from './modules/birthday/birthday.component';
import { CandleComponent } from './modules/candle/candle.component';
import { CardComponent } from './modules/card/card.component';
import { ChocolateComponent } from './modules/chocolate/chocolate.component';
import { CongratulationComponent } from './modules/congratulation/congratulation.component';
import { DetailProductComponent } from './modules/detail-product/detail-product.component';
import { FlowerVaseComponent } from './modules/flower-vase/flower-vase.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { OpeningComponent } from './modules/opening/opening.component';
import { RegisterComponent } from './modules/register/register.component';
import { RomanticComponent } from './modules/romantic/romantic.component';
import { SorryComponent } from './modules/sorry/sorry.component';
import { TeddyBearComponent } from './modules/teddy-bear/teddy-bear.component';
import { WeddingComponent } from './modules/wedding/wedding.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
      children: [{
        path: '',
        component: HomeComponent
      },
      {
        path: 'birthday',
        component: BirthdayComponent
      },
      {
        path: 'congratulation',
        component: CongratulationComponent
      },
      {
        path: 'opening',
        component: OpeningComponent
      },
      {
        path: 'romantic',
        component: RomanticComponent
      },
      {
        path: 'sorry',
        component: SorryComponent
      },
      {
        path: 'card',
        component: CardComponent
      },
      {
        path: 'teddy_bear',
        component: TeddyBearComponent
      },
      {
        path: 'candle',
        component: CandleComponent
      },
      {
        path: 'chocolate',
        component: ChocolateComponent
      },
      {
        path: 'flower_vase',
        component: FlowerVaseComponent
      }
    ]
  },
  {
    path: '',
    component: FullwidthComponent,
      children: [{
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: '',
    component: FullwidthComponent,
      children: [{
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path: '',
    component: FullwidthComponent,
      children: [{
        path: 'detailProduct',
        component: DetailProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
