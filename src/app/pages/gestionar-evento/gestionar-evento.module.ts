import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionarEventoPageRoutingModule } from './gestionar-evento-routing.module';

import { GestionarEventoPage } from './gestionar-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionarEventoPageRoutingModule
  ],
  declarations: [GestionarEventoPage]
})
export class GestionarEventoPageModule {}
