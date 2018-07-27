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

  // getAllProducts(){
  //   return this.products;
  // }

  //tham số name?: dấu ? là tham số này có hoặc ko có cũng đc, truyền vào 1 hoặc 2, hoặc 0 tham số đều đc. 
  //Hàm này làm luôn nhiệm vụ của hàm getAllProducts cũ rồi
  getAllProducts(name?: string, price?: number){
    
    let result : Product[] = this.products;
    
    //nếu có ts name, price thì lọc để cho ra mảng theo các tham số đó. Sử dụng filter để lọc, trước khi lọc cho về thường hết hoặc hoa hết. 
    //hàm A.indexOf(B) kiểm tra xem có chuỗi B trong chuỗi A hay ko, trả về vị trí, nếu ko có trả -1. 
    if(name){
      result = this.products.filter(x => {
        return x.name.toLowerCase().indexOf(name.toLowerCase())  != -1;
      });
    }

    if(price){
      result = this.products.filter(x => {
        return x.price === (+price); //ép về kiểu int rồi mới so sánh === đc, còn ko ép thì so sánh ==
      });
    }

    return result;
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
