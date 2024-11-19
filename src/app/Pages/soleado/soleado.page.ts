import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-soleado',
  templateUrl: './soleado.page.html',
  styleUrls: ['./soleado.page.scss'],
})
export class SoleadoPage {

  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back();
  }
}
