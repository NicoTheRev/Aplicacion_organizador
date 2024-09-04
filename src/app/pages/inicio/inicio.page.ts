import { Component, OnInit } from '@angular/core';

interface Opciones{
  icon: string;
  name: string;
  redirecTo: string;
} 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  opciones:Opciones[]=[
    {
      icon:'add-circle',
      name:'Crear evento',
      redirecTo:'/pages/crear-evento'
    },
    {
      icon:'color-wand',
      name:'Gestionar evento',
      redirecTo:'/pages/gestionar-evento'
    },
    {
      icon:'clipboard',
      name:'Listado de eventos',
      redirecTo:'/pages/listado-eventos'
    },
    {
      icon:'exit',
      name:'Cerrar sesion',
      redirecTo:'/'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
