import { Component, OnInit, Input, AfterViewChecked, ViewChild } from '@angular/core';
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
  @ViewChild('input') input;

  assets = assets;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    const textareas = document.querySelectorAll('textarea');

    for (let i = 0; i < textareas.length; i++) {
      textareas[i].style.height = 'auto';
      textareas[i].style.height = (textareas[i].scrollHeight) + 'px';
    }
  }

  selectAll(textarea) {
    textarea.setSelectionRange(0, textarea.value.length);
  }

  remove(textarea, key) {
    const params = {}

    params["key"] = key;

    fetch('/delete/' + location.pathname.slice(1),{
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
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
