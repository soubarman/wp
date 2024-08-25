import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // This ensures the service is available throughout the app
})
export class WeatherService {
  private apiKey = '67895a2f180a45a594a43635242408';
  private apiUrl = 'https://api.weatherapi.com/v1';

  constructor(private http: HttpClient) {}

  searchLocation(query: string): Observable<any> {
  const url = `${this.apiUrl}/search.json?key=${this.apiKey}&q=${query}`;
  console.log('Request URL:', url); // Add this line to debug the URL being used
  return this.http.get(url);
}


  getCurrentWeather(location: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/current.json?key=${this.apiKey}&q=${location}`);
  }

  getForecast(location: string, days: number = 30): Observable<any> {
    return this.http.get(`${this.apiUrl}/forecast.json?key=${this.apiKey}&q=${location}&days=${days}`);
  }
}
