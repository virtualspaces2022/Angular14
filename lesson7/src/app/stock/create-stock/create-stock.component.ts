import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators,FormBuilder, FormArray } from '@angular/forms';
import { Stock } from 'src/app/model/stock';
let counter=1;

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
  //public nameControl=new FormControl();
  public stockForm!: FormGroup;

    constructor(private fb:FormBuilder){
      this.createForm();
    //this.stock=new Stock('test','',0,0,"NASDAQ");
  }
  createForm(){
    this.stockForm=this.fb.group({
        name: new FormControl(null,Validators.required),
        code: new FormControl(null,[Validators.required, Validators.minLength(2)]),
        price: new FormControl(null,[Validators.required, Validators.min(0)]),
        notablePeople:this.fb.array([])
    })
  };
  get  notablePeople():FormArray{
    return this.stockForm.get('notablePeople') as FormArray
  }
  addNotablePerson(){
    this.notablePeople.push(this.fb.group({
      name:['',Validators.required],
      title:['',Validators.required],
    }))
  }
  removeNotablePerson(index:number){
     this.notablePeople.removeAt(index);
  }

 /* public stockForm:FormGroup=new FormGroup({
    name: new FormControl(null,Validators.required),
    code: new FormControl(null,[Validators.required, Validators.minLength(2)]),
    price: new FormControl(null,[Validators.required, Validators.min(0)]),
  });*/


 /* setStockPrice(price:any){
    this.stock.price=price;
    this.stock.previousPrice=price;
  }
  createStock(stockForm:any){
    console.log('Form Stock',this.stock);
    if (stockForm.valid){
      console.log('Creating Stock',this.stock);
      this.stock=stockForm.value.stock;
    }else{
      console.log('Invalid Stock',this.stock);
    }
  } */
  onSubmit(){
    console.log("Stock  Control value",this.stockForm.value);
    this.stock=Object.assign([],this.stockForm.value);
  }
  LoadStockFromServer(){
    this.stock=new Stock('Test'+ counter++,'TST',20,30,'EMPTY');
    let stockFormModel=Object.assign([],this.stock);
   // delete stockFormModel.previousPrice;
   //delete stockFormModel.favourite;
  this.stockForm.setValue(stockFormModel);
  }
  patchStockForm(){
    this.stock=new Stock('Test'+ counter++,'TST',20,30,'EMPTY');
    this.stockForm.patchValue(this.stock);
  }
  resetForm(){
    this.stockForm.reset();
  }

}
