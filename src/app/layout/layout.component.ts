import { Component } from '@angular/core';
import {ContentComponent} from "./content/content.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    ContentComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
