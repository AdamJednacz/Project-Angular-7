import {Component, inject, OnInit} from '@angular/core';
import {WeatherApiService} from "../../../../wearher-api.service";
import {Observable} from "rxjs";
import {City} from "../../../../city.model";
import {AsyncPipe, DatePipe, NgIf} from "@angular/common";
import {UnixToHourPipe} from "../../../../unix_to_hour.pipe";

@Component({
  selector: 'app-sunrise-sunset',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    DatePipe,
    UnixToHourPipe
  ],
  templateUrl: './sunrise-sunset.component.html',
  styleUrl: './sunrise-sunset.component.scss'
})
export class SunriseSunsetComponent  implements OnInit{
  private weatherApi = inject(WeatherApiService);

  weatherData$!: Observable<City | null>;
  ngOnInit() {
    this.weatherData$ = this.weatherApi.weatherData$;
  }
}
