import {inject, Injectable} from '@angular/core';
import {City3dayWeatherModel} from "./city-3day-weather.model";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TreeDaysWearherApiService {

  private httpClient = inject(HttpClient);

  private threeDayWeatherDataSubject = new BehaviorSubject<City3dayWeatherModel | null>(null);
  threeDayWeatherData$: Observable<City3dayWeatherModel | null> = this.threeDayWeatherDataSubject.asObservable();

  get3DaysWeatherData(city: string): void {
    this.httpClient.get<any>(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e42bd63f2a2dc001a978451afb7ae7a3&units=metric`)
      .subscribe({
        next: (response: any) => {
          // Wyświetlenie pełnej odpowiedzi w logu
          console.log('Full response from API:', response);

          // Zmapowanie odpowiedzi do modelu City
          const treeDaysData: City3dayWeatherModel = {
            list: response.list.slice(0, 12).map((item: any) => ({
              date: item.dt_txt,
              main: {
                temp: item.main.temp.toString(),
                temp_max: item.main.temp_max.toString(),
                temp_min: item.main.temp_min.toString(),
                humidity: item.main.humidity.toString(),
                pressure: item.main.pressure.toString(),
              },
              wind: {
                speed: item.wind.speed.toString()
              },
              weather:{
                icon:item.weather[0].icon.toString()
              }
            }))
          };


          this.threeDayWeatherDataSubject.next(treeDaysData);
          console.log(treeDaysData)
        },
        error: (error) => {
          console.error('Error fetching weather data:', error);
        }
      });
  }

}
