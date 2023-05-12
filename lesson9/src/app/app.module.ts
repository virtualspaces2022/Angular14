import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { FormsModule } from '@angular/forms';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { MessageService } from './services/message.service';
import { StockService } from './services/stock.service';

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    CreateStockComponent,
    StockListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ 
    StockService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
