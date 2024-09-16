import { Pipe, PipeTransform, inject } from '@angular/core';

import { map, Observable } from 'rxjs';
import { City } from './city.model';
import {WeatherApiService} from "./wearher-api.service";

@Pipe({
  standalone: true,
  name: 'unixToHour'
})
export class UnixToHourPipe implements PipeTransform {
  private weatherApi = inject(WeatherApiService);

  transform(value: number): string {
    // Pobierz aktualną strefę czasową z serwisu
    let timezone = 0;
    this.weatherApi.weatherData$.subscribe((city: City | null) => {
      if (city && typeof city.timezone === 'number') {
        timezone = city.timezone;
      }
    });

    // Konwersja Unix do formatu HH:mm
    const date = new Date(value * 1000); // Unix jest w sekundach, a JavaScript używa milisekund
    const localTime = new Date(date.getTime() + timezone * 1000);

    const hours = localTime.getUTCHours().toString().padStart(2, '0');
    const minutes = localTime.getUTCMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
  }
}
