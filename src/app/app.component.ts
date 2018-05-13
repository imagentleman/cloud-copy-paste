import { Component, OnInit } from '@angular/core';
import { strings } from './constants/strings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  strings = strings;
  entries = [];

  ngOnInit() {
    this.entries = [
      "/dist/ccp/assets/lake.jpg",
      "http://ccc.2018.angularattack.io",
      "Angular Attack Idea: Lightweight shared clipboard solution, across devices and operating systems...",
      `Found a great portrait wallpaper while searching on your laptop and want to easily share it with your phone?
       Just paste the url and it'll be automatically visible on your phone.
       Want to brainstorm and share on meetings?
       Did you have a great idea on the go and want to pick it up at work on you laptop?
       Have a weird url you want to test on a device (ngrok)?
       Browsed a great video on your phone but want to watch it on bigger screen?`
    ]
  }
}
