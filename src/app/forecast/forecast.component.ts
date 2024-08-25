import { Component, Input, OnChanges } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class ForecastComponent implements OnChanges {
  @Input() location!: string;
  forecast: any;

  constructor(private weatherService: WeatherService) {}

  ngOnChanges() {
    if (this.location) {
      this.weatherService.getForecast(this.location,30).subscribe(response => {
        this.forecast = response;
      });
    }
  }

  // Filter out today's date
  filteredForecast() {
    if (!this.forecast) return [];
    const today = new Date().toISOString().split('T')[0];
    return this.forecast.forecast.forecastday.filter((day: any) => day.date !== today);
  }
}
