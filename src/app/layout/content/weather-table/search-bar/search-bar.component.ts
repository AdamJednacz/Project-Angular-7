import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { filter } from "rxjs";
import {WeatherApiService} from "../../../../wearher-api.service";
import {TreeDaysWearherApiService} from "../../../../tree-days-wearher-api.service";


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  private weatherApi = inject(WeatherApiService);
  private tree_days_weatherApi = inject(TreeDaysWearherApiService);

  form = new FormGroup({
    city: new FormControl(''),
  });

  ngOnInit(): void {
    const cityChanges = this.form.controls['city'].valueChanges.pipe(filter(val => !!val));

    cityChanges.subscribe(val => {
      this.weatherApi.getWeatherData(val!);
    });
    cityChanges.subscribe(val => {
      this.tree_days_weatherApi.get3DaysWeatherData(val!);
    });


  }
}
