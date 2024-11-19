import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '0fd98511d36d04095095a8b551b5da4d'; // Tu clave de API
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<any> {
    const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`; // Usar el nombre de la ciudad
    return this.http.get(url);
  }
}
