import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {ProductsService } from 'C:/Users/LPEREZ/git/learningAngular/Laura/AppWithService/src/app/services/products.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
