import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
import { Stock } from '../model/stock';
//import {_throw as ObservableThrow} from 'rxjs/'
import { ErrorObserver } from 'rxjs';
import { of as ObservableOf } from 'rxjs';
import { Observable, of, from, throwError } from "rxjs";
let errorCount = 0;

@Injectable()
export class StockService {

  private stocks: Stock[];
  constructor() {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ'),
      new Stock('Second Stock Company', 'SSC', 10, 20, 'NSE'),
      new Stock('Last Stock Company', 'LSC', 876, 765, 'NYSE')
    ];
   }

  getStocks() : Observable<Stock[]> {
    return ObservableOf(this.stocks);
  }

 
  createStock(stock: Stock):Observable<any> {
    let foundStock = this.stocks.find(each => each.code === stock.code);
    if (foundStock) {
      return throwError({msg:'Stock with code' +stock.code+'already exist'});
    }
    this.stocks.push(stock);
    return throwError({msg:'Stock with code' +stock.code+'successfully created'});
  }

  toggleFavorite(stock: Stock) {
    let foundStock = this.stocks.find(each => each.code === stock.code);
   // foundStock.favorite = !foundStock.favorite;
  }
}
