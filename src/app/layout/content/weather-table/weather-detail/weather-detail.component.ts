import { Component } from '@angular/core';
import {SearchBarComponent} from "../search-bar/search-bar.component";
import {WeatherTableComponent} from "../weather-table.component";

@Component({
  selector: 'app-weather-detail',
  standalone: true,
  imports: [
    SearchBarComponent,
    WeatherTableComponent
  ],
  templateUrl: './weather-detail.component.html',
  styleUrl: './weather-detail.component.scss'
})
export class WeatherDetailComponent {

}
