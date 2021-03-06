import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { InputComponent } from './input/input.component';
import { EntriesComponent } from './entries/entries.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClipboardComponent,
    InputComponent,
    EntriesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
