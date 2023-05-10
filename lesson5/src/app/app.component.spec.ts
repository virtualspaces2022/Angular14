import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { Stock } from './model/stock';
import {By} from '@angular/platform-browser';

describe('AppComponent', () => { 

     /* describe('Simple, No Angular Unit Test',()=>{
        something 
      });

        describe('Angular-Aware test',()=>{
          let fixture, component;
          beforeEach(async(()=> {
            TestBed.configureTestingModule({
              declarations:[
                AppComponent,
                StockItemComponent
              ]
            }).compileComponents
          }));
        }
      );*/
        let fixture:any;
      it('should have stock instatiated on nginit',()=>{
        const appComponent = new AppComponent();
        expect(appComponent.stock).toBeUndefined();

        appComponent.ngOnInit();
        expect(appComponent.stock).toEqual(
          new Stock('Test Stock Company', 'TSC', 85, 80));
        
      });
      
      
      it('should have toggle stock favorite',()=>{
        const appComponent = new AppComponent();
       

        appComponent.ngOnInit();
        expect(appComponent.stock.favorite).toBeFalsy();

        appComponent.onToggleFavorite(new Stock('test','test',54,55));
        expect(appComponent.stock.favorite).toBeTruthy();

        appComponent.onToggleFavorite(new Stock('test','test',54,55));
        expect(appComponent.stock.favorite).toBeFalsy();  

      });

      it('should toggle stock favorite correctly', () => {
        const appComponent = new AppComponent();
        appComponent.ngOnInit();
        expect(appComponent.stock.favorite).toBeFalsy();
       let addToFavoriteBtnEl = fixture.debugElement.query(By.css('button'));
      expect(addToFavoriteBtnEl).toBeDefined();
    /*     addToFavoriteBtnEl.triggerEventHandler('click', null);
      fixture.detectChanges();
       expect(appComponent.stock.favorite).toBeTruthy();
       addToFavoriteBtnEl = fixture.debugElement.query(By.css('button'));
        expect(addToFavoriteBtnEl).toBeNull();*/
        });

});



  /*
describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

it(`should have as title 'stock-market'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('stock-market');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('stock-market app is running!');
  });
});*/
