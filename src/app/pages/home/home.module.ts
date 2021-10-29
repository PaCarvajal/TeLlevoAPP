import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { CompCuentaComponent } from 'src/app/components/comp-cuenta/comp-cuenta.component';
//acá se importa el componente donde se esta llamando al json
import { CompViajarComponent } from 'src/app/components/comp-viajar/comp-viajar.component';

export function playerFactory(){
  return player
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    LottieModule.forRoot({player:playerFactory})
  ],
  declarations: [HomePage, CompCuentaComponent, CompViajarComponent] //acá se declara el componente donde se esta llamando al json
})
export class HomePageModule {}
