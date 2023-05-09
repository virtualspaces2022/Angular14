export class Stock {
    public favorite:boolean | undefined;
    constructor(
        public name:string ="" ,
        public code:string ="",
        public price:number =0,
        public  previousPrice: number =0 
       // public positiveChange:boolean 
    ){}
    isPostiveChange():boolean{
        return this.price >= this.previousPrice;
    }
}
