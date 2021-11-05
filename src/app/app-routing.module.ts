import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  // {
  //   path: 'recover',
  //   loadChildren: () => import('./recover/recover.module').then( m => m.RecoverPageModule)
  // },
  // {
  //   path: 'pedirviaje',
  //   loadChildren: () => import('./pedirviaje/pedirviaje.module').then( m => m.PedirviajePageModule)
  // },
  {
    //esta listo 
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
