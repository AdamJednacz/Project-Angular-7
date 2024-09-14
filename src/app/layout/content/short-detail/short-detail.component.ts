import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-short-detail',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './short-detail.component.html',
  styleUrl: './short-detail.component.scss'
})
export class ShortDetailComponent {
  imageSrc = '/assets/Cloudy.png'
}
