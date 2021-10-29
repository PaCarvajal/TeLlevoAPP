import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

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
  declarations: [HomePage]
})
export class HomePageModule {}
