import {Component, inject, OnInit} from '@angular/core';
import {TreeDaysWearherApiService} from "../../../../tree-days-wearher-api.service";
import {Observable} from "rxjs";
import {City3dayWeatherModel} from "../../../../city-3day-weather.model";
import {AsyncPipe, DatePipe, DecimalPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-temp-scroll',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    NgForOf,
    DecimalPipe,
    NgIf
  ],
  templateUrl: './temp-scroll.component.html',
  styleUrl: './temp-scroll.component.scss'
})
export class TempScrollComponent implements OnInit {
  private tree_days_weatherApi = inject(TreeDaysWearherApiService);
  threeDayWeatherData$!: Observable<City3dayWeatherModel | null>;

  ngOnInit():void {
    this.threeDayWeatherData$ = this.tree_days_weatherApi.threeDayWeatherData$;
  }

}
