import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page {


  goToInfo() {
    this.navCtrl.navigateForward('/info'); // Asegúrate de tener una página llamada 'info'
  }
  goToDetails() {
    this.navCtrl.navigateForward('/details');
  }
  goToSoleado(){
    this.navCtrl.navigateForward('/soleado')
  }
  goIniciar(){
    this.navCtrl.navigateForward('/login')
  }
  goBack() {
    this.navCtrl.back(); // Esto te regresa a la página anterior
  }
  // Obtener los productos cuando la página se carga

  logout() {
    localStorage.removeItem('isLoggedIn'); // Eliminar el estado de sesión
    this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
  }
  constructor(private navCtrl: NavController,private http: HttpClient, private router: Router) {}
}
