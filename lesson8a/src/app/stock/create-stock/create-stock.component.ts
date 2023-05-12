import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

import { StockService } from 'src/app/services/stock.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})

export class CreateStockComponent {

  public stock: Stock;
  public confirmed = false;
  public message=null;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  constructor(private stockService: StockService,
              public messageService: MessageService) {
    this.stock =  new Stock('', '', 0, 0, 'NASDAQ');
    this.messageService.message = 'Component Level: Hello Message Service';
  }
/*
  setStockPrice(price : number) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock({ stockForm }: { stockForm: { valid: any; }; }): void {
    if (stockForm.valid) {
      let created = this.stockService.createStock(this.stock);
      if (created) {
        this.messageService.message =
            'Successfully created stock with stock code: ' +
            this.stock.code;
        this.stock =  new Stock('', '', 0, 0, 'NASDAQ');
      } else {
        this.messageService.message = 'Stock with stock code: ' +
            this.stock.code + ' already exists';
      }
    } else {
      console.error('Stock form is in an invalid state');
    }
  }*/
  setStockPrice(price: number) {
    this.stock.price = price;
    this.stock.previousPrice = price;
    }
    createStock(stockForm: any) {
    /* Code as before, no change */
    /* Omitted for brevity */
    if (stockForm.valid) {
     // let created = this.stockService.createStock(this.stock);
     this.stockService.createStock(this.stock)
        .subscribe((result:any)=>{
        this.message=result.msg;
        this.messageService.message ; //
        this.stock=new Stock('', '', 0, 0, 'NASDAQ');
    },(err)=>{
      this.message=err.msg;
    });
    }
     else {
      console.error('Stock form is in an invalid state');
    }
  }
    


}
