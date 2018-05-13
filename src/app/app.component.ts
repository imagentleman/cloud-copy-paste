import { Component, OnInit, ElementRef } from "@angular/core";
import { Location, DOCUMENT } from "@angular/common";
import { strings } from "./constants/strings";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  strings = strings;
  entries = [];

  constructor() {
    document.addEventListener('updateentries', this.updateEntries.bind(this));
  }

  sortEntries(entries) {
    entries.sort(function(a, b) {
      if (a.key > b.key) {
        return -1;
      }

      if (a.key < b.key) {
        return 1;
      }

      return 0;
    });

    return entries;
  }

  updateEntries(e) {
    const entries = Object.keys(e.detail).map(key => {
      return {key, 'value': e.detail[key]}
    });

    entries.sort(function(a, b) {
      if (a.key > b.key) {
        return -1;
      }

      if (a.key < b.key) {
        return 1;
      }

      return 0;
    })

    this.entries = entries;
  }

  ngOnInit() {
    fetch('/get/' + location.pathname.slice(1)).then(response => response.json()).then(json => {
      this.entries = this.sortEntries(Object.keys(json).map(key => {
        return {key, 'value': json[key]}
      }));
    });
    // const entries = {
    //   exampleImage: "/dist/ccp/assets/lake.jpg",
    //   exampleUrl: "http://ccc.2018.angularattack.io",
    //   exampleText: "Test"
    // };
    // this.entries = this.sortEntries(Object.keys(entries).map(key => {
    //   return {key, 'value': entries[key]}
    // }));
  }
}
