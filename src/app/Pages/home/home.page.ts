import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { PushNotificationService } from '../../services/push-notification.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ngOnInit() {
    // Solicita permisos de notificación
    this.pushNotificationService.requestPermission();
  
    // Escucha mensajes push
    this.pushNotificationService.listen();
  
  }

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
  mostrarNotification() {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('¡Hola desde GymApp!', {
        body: 'Esta es una notificación de prueba.',
      });
    } else {
      console.log('No se puede mostrar la notificación. Permiso no concedido.');
    } 
  }

  constructor(private navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private router: Router,
    private pushNotificationService: PushNotificationService) {}
}


