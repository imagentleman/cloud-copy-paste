import { Component, OnInit, Input } from '@angular/core';
import { assets } from '../constants/assets';

@Component({
  selector: 'ccp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() strings;
  assets = assets;

  constructor() { }

  ngOnInit() {
  }

  selectAll(textarea) {
    textarea.setSelectionRange(0, textarea.value.length);
  }
}
