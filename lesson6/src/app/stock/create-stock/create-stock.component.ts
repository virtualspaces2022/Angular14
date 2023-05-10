import { Component } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {
  [x: string]: any;
  public stock!:Stock;
  public confirmed=false;
  public exchanges=['NYSE','NASDAQ','OTHER'];

  constructor(){
    this.stock=new Stock('test','',0,0,"NASDAQ");
  }
  setStockPrice(price:any){
    this.stock.price=price;
    this.stock.previousPrice=price;
  }
  createStock(stockForm:any){
    console.log('Form Stock',this.stock);
    if (stockForm.valid){
      console.log('Creating Stock',this.stock);
    }else{
      console.log('Invalid Stock',this.stock);
    }
  }

}
