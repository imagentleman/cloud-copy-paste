import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { strings } from "./constants/strings";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  strings = strings;
  entries = {};

  constructor() {}

  ngOnInit() {
    fetch('/get/' + location.pathname.slice(1)).then(response => response.json()).then(json => {
      this.entries = Object.keys(json).map(key => {
        return {key, 'value': json[key]}
      });
    });
    // const entries = {
    //   exampleImage: "/dist/ccp/assets/lake.jpg",
    //   exampleUrl: "http://ccc.2018.angularattack.io",
    //   exampleText: "Test"
    // };

    // this.entries = Object.keys(entries).map(key => {
    //   return {key, 'value': entries[key]}
    // });
  }
}
