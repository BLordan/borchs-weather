import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WetterzentralePageRoutingModule } from './wetterzentrale-routing.module';

import { WetterzentralePage } from './wetterzentrale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WetterzentralePageRoutingModule,
  ],
  declarations: [WetterzentralePage],
})
export class WetterzentralePageModule {}
