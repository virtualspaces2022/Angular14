import { Component, SimpleChanges, OnInit,
  OnChanges, OnDestroy, DoCheck, AfterViewChecked,
  AfterViewInit, AfterContentChecked,
  AfterContentInit, Input,
  Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class StockItemComponent implements OnInit, OnChanges,
                                                  OnDestroy, DoCheck,
                                                  AfterContentChecked,
                                                  AfterContentInit,
                                                  AfterViewChecked,
                                                  AfterViewInit
                                                                                      
  {

@Input()  public stock!: Stock;
@Output() public toggleFavorite :EventEmitter<Stock>;
 //public stockClasses: any;
 //public stockStyles:any;
 
  
  constructor(){
    this.toggleFavorite=new EventEmitter<Stock>();
  }
  
  /*ngOnInit(){
    this.stock=[
      new Stock('Test Stock Company','TSC',300,80),
      new Stock('Second Stock Company','SSC',-10,80),
      new Stock('Third Stock Company','TTSC',876,800),
      new Stock('Forth Stock Company','FSC',75,760)
    ];*/


   /* let diff=(this.stock.price / this.stock.previousPrice)-1;
    let largeChange=Math.abs(diff)>0.01;
    this.stockClasses={
      "positive":this.stock.isPostiveChange(),
      "negative":!this.stock.isPostiveChange(),
      "large-change": largeChange,
      "small-change":!largeChange
    }; 
    this.stockStyles={
      "color" :this.stock.isPostiveChange()?"green" :"red", "font-size":largeChange?"1.2em":"0.8em"
    };*/
 // }
  toggleFav(event: any){
   // console.log('We are toggling the favorite state',event);
   // this.stock.favorite=!this.stock.favorite;
   this.toggleFavorite.emit(this.stock);
  }
/*
  toggleFav(event: any,index :any){
    console.log('We are toggling the favorite state',event);
    this.stock[index].favorite=!this.stock[index].favorite;
  }
  trackStockByCode(index:any,stock:Stock){
    console.log(stock.code);
    return stock.code;
  }*/
  changeStockPrice(){
    this.stock.price+=5;
  }

    ngOnInit(): void {
    console.log('Stock Item Component - On Init');
    }
    ngAfterViewInit(): void {
    console.log('Stock Item Component - After View Init');
    }
    ngAfterViewChecked(): void {
    console.log('Stock Item Component - After View Checked');
    }
    ngAfterContentInit(): void {
    console.log('Stock Item Component - After Content Init');
    }
    ngAfterContentChecked(): void {
    console.log('Stock Item Component - After Content Checked');
    }
    ngDoCheck(): void {
    console.log('Stock Item Component - Do Check');

    }
    ngOnDestroy(): void {
    console.log('Stock Item Component - On Destroy');
    }
    ngOnChanges(changes: SimpleChanges): void {
    console.log('Stock Item Component - On Changes - ', changes);
    }
}
