import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ccp-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.css']
})
export class ClipboardComponent implements OnInit {
  @Input() strings;
  @Input() entries;

  constructor() { }

  ngOnInit() {
  }

}
