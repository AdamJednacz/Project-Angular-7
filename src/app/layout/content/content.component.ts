import { Component } from '@angular/core';
import {ShortDetailComponent} from "./short-detail/short-detail.component";
import {WeatherTableComponent} from "./weather-table/weather-table.component";
import {SearchBarComponent} from "./weather-table/search-bar/search-bar.component";
import {SunriseSunsetComponent} from "./weather-table/sunrise-sunset/sunrise-sunset.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    ShortDetailComponent,
    WeatherTableComponent,
    SearchBarComponent,
    SunriseSunsetComponent,

  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
