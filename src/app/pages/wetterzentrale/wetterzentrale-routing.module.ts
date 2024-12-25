import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WetterzentralePage } from './wetterzentrale.page';

const routes: Routes = [
  {
    path: '',
    component: WetterzentralePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WetterzentralePageRoutingModule {}
