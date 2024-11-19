import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {

  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back(); // Esto te regresa a la página anterior
  }
}
