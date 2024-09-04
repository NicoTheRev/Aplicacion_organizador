import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionarEventoPage } from './gestionar-evento.page';

const routes: Routes = [
  {
    path: '',
    component: GestionarEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarEventoPageRoutingModule {}
