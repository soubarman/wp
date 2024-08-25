import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    SearchComponent,
    CurrentWeatherComponent,
    ForecastComponent
  ]
})
export class AppComponent {
  title = 'Weather Dashboard';
  location: string = '';

  constructor(private weatherService: WeatherService) {}

  onSearch(searchTerm: string) {
    console.log(searchTerm); // Handle the search term
    this.location = searchTerm; // Update location or perform search
  }
}
