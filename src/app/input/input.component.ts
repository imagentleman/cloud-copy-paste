import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import { assets } from '../constants/assets';

@Component({
  selector: 'ccp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() strings;
  @ViewChild('input') input;
  assets = assets;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.input.nativeElement.style.height = 'auto';
    this.input.nativeElement.style.height = (this.input.nativeElement.scrollHeight) + 'px';
  }

  selectAll(textarea) {
    textarea.setSelectionRange(0, textarea.value.length);
  }

  resize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
  }

  add(e, textarea) {
    e.preventDefault();

    if (!textarea.value) {
      return;
    }

    const params = {}

    params["value"] = textarea.value;

    fetch('/post/' + location.pathname.slice(1),{
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
  }
}
