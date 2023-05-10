import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { StockItemComponent } from './stock/stock-item/stock-item.component';


@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
