import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// TODO: extract into different modules
import {PropositionsComponent} from "./propositions/propositions.component";

@NgModule({
  declarations: [
    AppComponent,
    PropositionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
