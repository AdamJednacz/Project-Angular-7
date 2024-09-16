import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {UnixToHourPipe} from "./unix_to_hour.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent,UnixToHourPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Corrected property name
})
export class AppComponent {
  title = 'Project-Angular-7';
}
