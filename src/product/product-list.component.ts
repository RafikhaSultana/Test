import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component ({
    
    templateUrl: `./product-list.component.html`,
    // styleUrls:[`/.product-list.component.css`]
    // styles :[`thead{color: #337AB7;}`]
    styleUrls :[`./product-list.component.css` ]
    
})
export class ProductListComponent implements OnInit,OnDestroy
{  

     pageTitle:string ='This is Product List Page'
     imageWidth:number = 50
     imageMargin:number =10
     showImage:boolean =false;
     errorMessage:string ='';
     sub!: Subscription;
     
    //  listFilter='cart'

    private _listFilter:string =''
    get listFilter():string
    {
      return this._listFilter;
    }
    set listFilter(value:string)
    {
      this._listFilter =value;
      console.log('Insetter', value);
      this.filteredProducts =this.perfomfilter(value);

    }
    perfomfilter(filterby :string):IProduct[]
     {
       filterby =filterby.toLocaleLowerCase();
       return this.products.filter( (products:IProduct)=>
       products.productName.toLocaleLowerCase().includes(filterby)) ;
       
      }
      onRatingClicked(message:string):void 
      {
        this.pageTitle ='hello    '+ message;
      }
    filteredProducts:IProduct [] =[];
    
     products:IProduct[] = [];

 constructor (private productService:ProductService)
 {  

 }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

 toggleImage():void
 {
     this.showImage =!this.showImage;
 }
 
 ngOnInit(): void {
 this.sub = this.productService.getProducts().subscribe({
   next:products =>{this.products =products,
    this.filteredProducts=this.products;
  },
   error:err =>this.errorMessage = err
 });
 
}
}