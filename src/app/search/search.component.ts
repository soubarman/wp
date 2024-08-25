import { Component, EventEmitter, Output } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  query: string = '';

  @Output() search = new EventEmitter<string>();

  constructor(private weatherService: WeatherService) {}

  onSearch() {
    this.weatherService.searchLocation(this.query).subscribe(response => {
      console.log(response);
      this.search.emit(this.query); // Emit the search query
      // Handle search results (e.g., update the main view with selected location)
    });
  }
}
