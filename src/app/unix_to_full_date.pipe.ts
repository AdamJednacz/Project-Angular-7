import { Pipe, PipeTransform, inject } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { City } from './city.model';
import {WeatherApiService} from "./wearher-api.service";

@Pipe({
  standalone: true,
  name: 'unixToFullDate'
})
export class UnixToFullDatePipe implements PipeTransform {
  private weatherApi = inject(WeatherApiService);



  transform(value: number): string{
    let timezone = 0;
    this.weatherApi.weatherData$.subscribe((city: City | null) => {
      if (city && typeof city.timezone === 'number') {
        timezone = city.timezone;
      }
    });
        const date = new Date(value * 1000); // Unix jest w sekundach, a JavaScript używa milisekund

        const localTime = new Date(date.getTime() + timezone * 1000);

        const daysOfWeek = [
          'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];
        const dayOfWeek = daysOfWeek[localTime.getUTCDay()];

        const dayOfMonth = localTime.getUTCDate();

        const months = [
          'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const month = months[localTime.getUTCMonth()];

        const year = localTime.getUTCFullYear();

        const hours = localTime.getUTCHours().toString().padStart(2, '0');
        const minutes = localTime.getUTCMinutes().toString().padStart(2, '0');

      return `${dayOfWeek}, ${dayOfMonth} ${month} ${year} ${hours}:${minutes}`;


  }
}
