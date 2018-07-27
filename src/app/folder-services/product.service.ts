import { Injectable } from '@angular/core';
import { Product } from './../folder-models/product';


@Injectable(
  // {providedIn: 'root'}
)

export class ProductService {

  public products : Product[] = [
    {
      id : 1,
      name : 'Iphone 7',
      price : 1000,
      status : true
    },
    {
      id : 2,
      name : 'Iphone 10',
      price : 2000,
      status : false
    },
    {
      id : 3,
      name : 'Xiaomi',
      price : 3000,
      status : false
    },
    {
      id : 4,
      name : 'Note 7',
      price : 4000,
      status : true
    }
  ];

  constructor() { }

  getAllProducts(){
    return this.products;
  }

  getProductByID(id : number){
    let result = null;
    for(let i = 0; i < this.products.length; i++){
      if(this.products[i].id === id){
        result = this.products[i];
        break;
      }
    }
    return result;
  }


}
