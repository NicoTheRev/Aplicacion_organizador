import { Component } from '@angular/core';

interface Opciones{
  icon: string;
  name: string;
  redirecTo: string;
} 


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  opciones:Opciones[]=[
    {
      icon:'add-circle',
      name:'Crear evento',
      redirecTo:'/crear-evento'
    },
    {
      icon:'color-wand',
      name:'Gestionar evento',
      redirecTo:'/gestionar-evento'
    },
    {
      icon:'exit',
      name:'Cerrar sesion',
      redirecTo:'/'
    }
  ]

  constructor() {}
}
