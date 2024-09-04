import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoEventosPageRoutingModule } from './listado-eventos-routing.module';

import { ListadoEventosPage } from './listado-eventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoEventosPageRoutingModule
  ],
  declarations: [ListadoEventosPage]
})
export class ListadoEventosPageModule {}
