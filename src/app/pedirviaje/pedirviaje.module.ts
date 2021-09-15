import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedirviajePageRoutingModule } from './pedirviaje-routing.module';

import { PedirviajePage } from './pedirviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedirviajePageRoutingModule
  ],
  declarations: [PedirviajePage]
})
export class PedirviajePageModule {}
