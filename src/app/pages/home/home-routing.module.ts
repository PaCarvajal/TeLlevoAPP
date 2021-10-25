import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompCuentaComponent } from 'src/app/components/comp-cuenta/comp-cuenta.component';
import { CompLlevarComponent } from 'src/app/components/comp-llevar/comp-llevar.component';
import { CompViajarComponent } from 'src/app/components/comp-viajar/comp-viajar.component';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'micuenta',
        component: CompCuentaComponent,
      },
      {
        path: 'llevar',
        component: CompLlevarComponent,
      },
      {
        path: 'viajar',
        component: CompViajarComponent,
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
