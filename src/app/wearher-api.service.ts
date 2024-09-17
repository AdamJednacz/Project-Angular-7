import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { City } from "./city.model";
import {City3dayWeatherModel} from "./city-3day-weather.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private httpClient = inject(HttpClient);


  private weatherDataSubject = new BehaviorSubject<City | null>(null);

  weatherData$: Observable<City | null> = this.weatherDataSubject.asObservable();


  getWeatherData(city: string): void {
    this.httpClient.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e42bd63f2a2dc001a978451afb7ae7a3&units=metric`)
      .subscribe({
        next: (response: any) => {
          // Wyświetlenie pełnej odpowiedzi w logu
          console.log('Full response from API:', response);

          // Możesz także kontynuować przekształcanie, jeśli chcesz
          const cityData: City = {
            main: {
              temp: response.main.temp,
              temp_min: response.main.temp_min,
              temp_max: response.main.temp_max,
              humidity: response.main.humidity,
              pressure: response.main.pressure,
            },
            wind:{
              speed: response.wind.speed,
            },
            clouds:response.clouds.all,
            name: response.name,
            sys:{
              sunrise: response.sys.sunrise,
              sunset: response.sys.sunset,
            },

            timezone:response.timezone,
            dt:response.dt,
            weather:{
              icon:response.weather[0].icon,
            }
          };


          this.weatherDataSubject.next(cityData);
          console.log(cityData)
        },
        error: (error) => {

        }
      });
  }



}
