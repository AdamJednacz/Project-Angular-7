import { Component } from '@angular/core';
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {WeatherDetailComponent} from "./weather-detail/weather-detail.component";
import {TempScrollComponent} from "./temp-scroll/temp-scroll.component";
import {SunriseSunsetComponent} from "./sunrise-sunset/sunrise-sunset.component";

@Component({
  selector: 'app-weather-table',
  standalone: true,
  imports: [
    SearchBarComponent,
    WeatherDetailComponent,
    TempScrollComponent,
    SunriseSunsetComponent,

  ],
  templateUrl: './weather-table.component.html',
  styleUrls: [ 'weather-table.component.scss']
})
export class WeatherTableComponent {

}
