import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideojuegosComponentClase } from './videojuegos/videojuego.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegosComponentClase
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
