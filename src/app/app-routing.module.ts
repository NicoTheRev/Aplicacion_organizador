import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
 
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'listado-eventos',
    loadChildren: () => import('./pages/listado-eventos/listado-eventos.module').then( m => m.ListadoEventosPageModule)
  },
  {
    path: 'crear-evento',
    loadChildren: () => import('./pages/crear-evento/crear-evento.module').then( m => m.CrearEventoPageModule)
  },
  {
    path: 'gestionar-evento',
    loadChildren: () => import('./pages/gestionar-evento/gestionar-evento.module').then( m => m.GestionarEventoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
