import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoleadoPage } from './soleado.page';

const routes: Routes = [
  {
    path: '',
    component: SoleadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoleadoPageRoutingModule {}
