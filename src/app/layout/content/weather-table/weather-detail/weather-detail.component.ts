import {Component, inject, Input, OnInit} from '@angular/core';
import {SearchBarComponent} from "../search-bar/search-bar.component";
import {WeatherTableComponent} from "../weather-table.component";
import {City} from "../../../../city.model";
import {WeatherApiService} from "../../../../wearher-api.service";
import {Observable} from "rxjs";
import {AsyncPipe, DecimalPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-weather-detail',
  standalone: true,
  templateUrl: './weather-detail.component.html',
  imports: [
    AsyncPipe,
    NgIf,
    DecimalPipe
  ],
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {
  private weatherApi = inject(WeatherApiService);

  weatherData$!: Observable<City | null>; // Observable to hold weather data

  ngOnInit(): void {
    this.weatherData$ = this.weatherApi.weatherData$; // Subscribe to weather data from service
  }
}
