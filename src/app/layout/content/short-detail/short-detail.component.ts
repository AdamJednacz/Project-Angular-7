import {Component, inject} from '@angular/core';
import {AsyncPipe, DecimalPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {WeatherApiService} from "../../../wearher-api.service";
import {interval, Observable} from "rxjs";
import {City} from "../../../city.model";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-short-detail',
  standalone: true,
  imports: [
    NgOptimizedImage,
    AsyncPipe,
    NgIf,
    DecimalPipe
  ],
  templateUrl: './short-detail.component.html',
  styleUrl: './short-detail.component.scss'
})
export class ShortDetailComponent {
  imageSrc = '/assets/Cloudy.png'

  private weatherApi = inject(WeatherApiService);

  weatherData$!: Observable<City | null>; // Observable to hold weather data
  currentTime$!: Observable<string>;

  ngOnInit(): void {
    this.weatherData$ = this.weatherApi.weatherData$; // Subscribe to weather data from service
    this.currentTime$ = interval(1000).pipe(
      map(() => this.getCurrentDateTime())
    );
  }
  getCurrentDateTime(): string {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const day = now.toLocaleString('en-US', { weekday: 'long' });
    const dayOfMonth = now.getDate();
    const month = now.toLocaleString('en-US', { month: 'short' });
    const year = now.getFullYear();

    return `${hours}:${minutes} ${day}, ${dayOfMonth} ${month} '${year}`;
  }
}
