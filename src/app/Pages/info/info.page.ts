import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage {
  weatherData: any;
  city: string = ''; // Variable para almacenar el nombre de la ciudad

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private weatherService: WeatherService
  ) {}

  goBack() {
    this.navCtrl.back();
  }

  getWeather() {
    if (!this.city) {
      console.error('Por favor, introduce una ciudad válida');
      return;
    }

    this.weatherService.getWeatherByCity(this.city).subscribe(
      data => {
        this.weatherData = data;
        console.log(this.weatherData);
      },
      error => {
        console.error('Error fetching weather data', error);
      }
    );
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
