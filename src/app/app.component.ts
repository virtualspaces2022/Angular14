import { Component, ViewEncapsulation,SimpleChanges,
OnInit,OnChanges, OnDestroy,DoCheck,AfterContentChecked,AfterViewChecked,AfterContentInit, AfterViewInit} from '@angular/core';
import { Stock } from './model/stock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterContentChecked,
                                    AfterContentInit,AfterViewChecked,AfterViewInit {
  title = 'stockmarket';
  topic="my topics";

  public stock!:Stock;
  private counter: number=1;

  testMethod(){
    console.log('Test Method in AppComponent Trigger');
  }

  ngOnInit():void{
    this.stock=new Stock('new stock'+this.counter++,'new',100,90);
    console.log('App COmponent-On Init')
  }
  toggleFav(stock: Stock){
    console.log('Favorite for stock',stock,' was triggered');
    this.stock.favorite=!this.stock.favorite;
  }
  changeStockObject(){
    this.stock=new Stock('Test new stock'+this.counter++,'TEST',100,90);
  }
  changeStockPrice(){
    this.stock.price+=10;
  }
  ngAfterViewInit(): void {
    console.log('App Component - After View Init');
    }
    ngAfterViewChecked(): void {
    console.log('App Component - After View Checked');
    }
    ngAfterContentInit(): void {
    console.log('App Component - After Content Init');
    }
    ngAfterContentChecked(): void {
    console.log('App Component - After Content Checked');
    }
    ngDoCheck(): void {
    console.log('App Component - Do Check');
    }
    ngOnDestroy(): void {
    console.log('App Component - On Destroy');
    }
    ngOnChanges(changes: SimpleChanges): void {
    console.log('App Component - On Changes - ', changes);
    }
}
