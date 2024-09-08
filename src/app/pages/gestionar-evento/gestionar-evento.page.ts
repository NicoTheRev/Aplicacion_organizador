import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionar-evento',
  templateUrl: './gestionar-evento.page.html',
  styleUrls: ['./gestionar-evento.page.scss'],
})
export class GestionarEventoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  async Rinicio(){
    this.router.navigate(['/inicio'])
  }

}
