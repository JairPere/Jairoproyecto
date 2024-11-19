import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoleadoPageRoutingModule } from './soleado-routing.module';

import { SoleadoPage } from './soleado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoleadoPageRoutingModule
  ],
  declarations: [SoleadoPage]
})
export class SoleadoPageModule {}
