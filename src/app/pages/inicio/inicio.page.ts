import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
}
)
export class InicioPage implements OnInit {

  constructor(private menucontroller: MenuController, private router:Router,
              private alertcontroller: AlertController) { }

  ngOnInit() {
  }

  async mostrarMensaje(){
    const alert = await this.alertcontroller.create({
      header: 'Confirmación',
      mode: 'ios',
      cssClass:'alertHeader',
      message: 'Se ha eliminado este evento.',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/inicio']);
          },
        },
      ],
    });

    await alert.present();
  }

  mostrarMenu(){
    this.menucontroller.open('firts') /*Enlaza a MenuID en app component */
  }

  async Rgestionar(){
    this.router.navigate(['/gestionar-evento'])
  }

}
