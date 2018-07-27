import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Subscription } from '../../../../node_modules/rxjs';

import { ProductService } from './../../folder-services/product.service';
import { Product } from './../../folder-models/product';

@Component({
  selector: 'app-router-product-detail',
  templateUrl: './router-product-detail.component.html',
  styleUrls: ['./router-product-detail.component.css']
})

/*Lấy Router params thông qua ActivatedRoute:

**Cách 1: lấy về đối tượng snapshot từ đối tượng activatedRoute,
-import ActivatedRoute từ @angular/router
-tiến hành Inject như 1 service
-lấy params từ snapshot
=> để dùng cách này thì trong ngOnInit() gọi hàm: handleParamsRouteBySnapshot()

**Cách 2: lấy về đối tượng subcription từ đối tượng activatedRoute,
-import ActivatedRoute từ @angular/router
-import Subscription từ rxjs
-tiến hành Inject như 1 service
-Khai báo đối tượng subcription để nhận subcription trả về từ activatedRoute, lấy params thông qua subscribe.
=>để dùng cách này thì trong ngOnInit() gọi hàm: handleParams()

-tại comp nhận tham số này, nhớ hủy đối tượng subcription mỗi lần kết thúc comp, vào trong ngOnDestroy mà hủy.
(Log xong F12 để xem các thành phần trong ActivatedRoute)
*/

export class RouterProductDetailComponent implements OnInit, OnDestroy {

  public product : Product = null;
  public subcription : Subscription;


  //Inject vào constructor giống như 1 service
  constructor(private activatedRoute : ActivatedRoute, private productService : ProductService) { }


  /*mỗi lần click đúng router thì nó sẽ gọi đến comp product detail này, thì hàm ngOnInit sẽ đc gọi, lúc này ta sẽ lấy params luôn. 
  (Các lần router mang đến với các tham số khác nhau, nhưng mỗi lần đến thì comp này thì sẽ gọi lại hàm lấy tham số vì mỗi lần đến 
  thì comp lại đc khởi động thì hàm ngOnInit lại đc gọi.)
  Vậy nên các hàm lấy tham số sẽ đc gọi trong ngOnInit*/
  ngOnInit() {
    // this.handleParamsRouteBySnapshot();
    this.handleParams();
  }
  

  //hủy đối tượng subcription mỗi lần kết thúc comp.
  ngOnDestroy() {
    if(this.subcription){
      this.subcription.unsubscribe();
    }
  }

  
  //Cách 1: lấy về đối tượng snapshot từ đối tượng activatedRoute,
  handleParamsRouteBySnapshot(){
    // console.log(this.activatedRoute);
    // console.log(this.activatedRoute.snapshot.params['id']);
    let id = (+this.activatedRoute.snapshot.params['id']); // (+) để chuyển về kdl number, tránh lỗi xung đột kdl
    this.product = this.productService.getProductByID(id);
  }

  //Cách 2: lấy về đối tượng subcription từ đối tượng activatedRoute,
  handleParams(){
    this.subcription = this.activatedRoute.params.subscribe(data => {
      let id = (+data.id);  // (+) để chuyển về kdl number, tránh lỗi xung đột kdl
      this.product = this.productService.getProductByID(id);

      // console.log(this.product);
    });
  }

  

}
