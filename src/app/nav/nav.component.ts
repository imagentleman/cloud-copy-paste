import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ccp-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() strings;

  constructor() { }

  ngOnInit() {
  }

}
