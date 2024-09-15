import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { City } from "./city.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private httpClient = inject(HttpClient);


  private weatherDataSubject = new BehaviorSubject<City | null>(null);

  weatherData$: Observable<City | null> = this.weatherDataSubject.asObservable();


  getWeatherData(city: string): void {
    this.httpClient.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e42bd63f2a2dc001a978451afb7ae7a3&units=metric`)
      .pipe(
        map(response => {
          return {
            main: {
              temp: response.main.temp,
              temp_min: response.main.temp_min,
              temp_max: response.main.temp_max,
              humidity: response.main.humidity,
              pressure: response.main.pressure,
            },
            wind:{
              speed:response.wind.speed,
            },
            name:response.name,
          } as City;
        })
      ).subscribe({
      next: (data: City) => {
        this.weatherDataSubject.next(data);
        console.log(data)
      },
      error: (error) => {
        console.error('Error fetching weather data:', error);
      }
    });
  }
}
