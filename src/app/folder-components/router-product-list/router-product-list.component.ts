import { Component, OnInit, OnDestroy } from '@angular/core';

import { Product } from '../../folder-models/product';
import { ProductService } from '../../folder-services/product.service';

//
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


/*Để hiển thị dòng queryParams từ comp: http://localhost:4200/products?name=&price= hiển thị ra ntn
-import Router
-Inject vào constructro như service
-gọi hàm navigate để lấy các params từ url hay từ query nhập vào.

-để lấy đc các param về thì dùng Subscription để lấy, giống như bên router-product-detail.component.ts 
*/ 

@Component({
  selector: 'app-router-product-list',
  templateUrl: './router-product-list.component.html',
  styleUrls: ['./router-product-list.component.css']
})
export class RouterProductListComponent implements OnInit, OnDestroy {

  public products : Product[] = [];

  public name : string;
  public price : number;

  public queryParamsSubcription : Subscription;


  //
  constructor(
    private productService : ProductService, 
    private routerService : Router, 
    private activatedRoute : ActivatedRoute ) { }

  ngOnInit() {
    //nếu ko sd activatedRoute bên dưới thì có thể lấy products theo cách thông thường, còn nếu sd activatedRoute thì dùng cách bên dưới
    // this.products = this.productService.getAllProducts();

    // sd ActivatedRoute để lấy params về
    this.queryParamsSubcription = this.activatedRoute.queryParams.subscribe(data => {
      let name = data['name'];
      let price = data['price'];


      //gán lại các biến để thay giữ giá trị trong khung input mỗi khi F5 lại
      this.name = name;
      this.price = price;

      this.products = this.productService.getAllProducts(name, price);
    });
  }


  ngOnDestroy(){
    if(this.queryParamsSubcription){
      this.queryParamsSubcription.unsubscribe();
    }
  }


    //gọi hàm navigate định dạng params truyền đi, để hiển thị lên url.
    //Đây là cách thiết lập đường link, nên cần chú ý, phải thiết lập trên đường dẫn hiện tại.
    //vd: lúc này đang ở /products/list muốn thiết lập link thì phải bắt đầu bằng /products/list, rồi mới tới các tham số.
  onSearch(){

    //TH router chỉ đến products, ko có tham số con: thì ko cần khai báo tham số con trong [] như TH dưới
    this.routerService.navigate(['/products/list'], { queryParams: {name: this.name ? this.name : '', price: this.price ? this.price : ''} });
    // console.log(this.name);


    //TH nếu router có tham số con thì phải khai báo trong [ , 'id']
    //http://localhost:4200/products/id?name=&price=
    // this.routerServce.navigate(['/products', 'id'], { queryParams: {name: this.name ? this.name : '', price: this.price ? this.price : ''} });
  }

}


