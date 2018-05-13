import { Component } from '@angular/core';
import { strings } from './constants/strings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  strings = strings;
}
