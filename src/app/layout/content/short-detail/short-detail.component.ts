import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, DecimalPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {WeatherApiService} from "../../../wearher-api.service";
import { Observable} from "rxjs";
import {City} from "../../../city.model";
import {UnixToFullDatePipe} from "../../../unix_to_full_date.pipe";

@Component({
  selector: 'app-short-detail',
  standalone: true,
  imports: [
    NgOptimizedImage,
    AsyncPipe,
    NgIf,
    DecimalPipe,
    UnixToFullDatePipe
  ],
  templateUrl: './short-detail.component.html',
  styleUrl: './short-detail.component.scss'
})
export class ShortDetailComponent implements OnInit{
  imageSrc = '/assets/Cloudy.png'
  private weatherApi = inject(WeatherApiService);
  weatherData$!: Observable<City | null>; // Observable to hold weather data
  ngOnInit(): void {
    this.weatherData$ = this.weatherApi.weatherData$; // Subscribe to weather data from service

  }

}
