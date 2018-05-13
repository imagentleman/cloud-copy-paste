import { Component, OnInit, Input } from '@angular/core';
import  { imageExtensions } from '../constants/image';
import { assets } from '../constants/assets';

@Component({
  selector: 'ccp-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {
  @Input() strings;
  @Input() entries;
  assets = assets;

  constructor() { }

  ngOnInit() {
  }

  type(entry) {
    const isImage = imageExtensions.filter(ext => entry.indexOf(ext) !== -1).length;

    if (isImage) {
      return 'image';
    } else if (entry.indexOf('http') === 0) {
      return 'url';
    }

    return 'text';
  }
}
