import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { Routing } from "./app.routing";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClient,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
