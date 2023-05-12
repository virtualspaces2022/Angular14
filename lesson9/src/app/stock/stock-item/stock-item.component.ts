import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Stock } from '../../model/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent {

  @Input()   public stock!: Stock;
  //@Output() toggleFavorite: EventEmitter<Stock>;

  constructor(private stockService :StockService) {
   // this.toggleFavorite = new EventEmitter<Stock>();
   }

  onToggleFavorite() {
    this.stockService.toggleFavorite(this.stock)
    .subscribe((stock)=>this.stock.favorite=!this.stock.favorite);
   // this.toggleFavorite.emit(this.stock);
  }
}
