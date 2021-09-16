import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedirviajePage } from './pedirviaje.page';

const routes: Routes = [
  {
    path: '',
    component: PedirviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedirviajePageRoutingModule {}
