import { Component, Input, OnChanges } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class CurrentWeatherComponent implements OnChanges {
  @Input() location!: string;
  currentWeather: any;
  currentDay: string = '';
  currentDate: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnChanges() {
    if (this.location) {
      this.weatherService.getCurrentWeather(this.location).subscribe(response => {
        this.currentWeather = response;
        this.setDateAndDay();
      });
    }
  }

  setDateAndDay(): void {
    const date = new Date();
    this.currentDay = this.getDayName(date.getDay());
    this.currentDate = this.formatDate(date);
  }

  getDayName(dayIndex: number): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  }

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
}
