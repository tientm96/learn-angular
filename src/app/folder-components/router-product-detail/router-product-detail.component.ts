import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

//sử dụng đối tượng Subscription để lắng nghe params trên link, nên phải tạo ra và hủy nó đi.
import { Subscription } from 'rxjs';

import { ProductService } from '../../folder-services/product.service';
import { Product } from '../../folder-models/product';




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
  constructor(
    private activatedRoute : ActivatedRoute, 
    private productService : ProductService,
    private routerService : Router) { }




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

  //Cách 2: lấy về đối tượng subcription từ đối tượng activatedRoute
  handleParams(){
    this.subcription = this.activatedRoute.params.subscribe(data => {
      let id = (+data.id);  // (+) để chuyển về kdl number, tránh lỗi xung đột kdl
      this.product = this.productService.getProductByID(id);

      // console.log(this.product);
    });
  }


  //gọi hàm navigate để định hướng router muốn truyền đi.
  //vào router-products.component.ts để hiểu rõ hơn về navigate
  onBackToList(){
    //Cách 1: đưa đường dẫn trực tiếp, để lùi về
    // this.routerService.navigate(['products/list']);

    //Cách 2: sd relativeTo. Gọi tới đường dẫn trước nó 1 bước, rồi + thêm đường dẫn cần +
    //ban đầu http://localhost:4200/ khi kích vào hàng 1 của bảng thì + products/1(đúng với router của detail) thì ra  http://localhost:4200/products/1, 
    //thì activatedRoute chính là http://localhost:4200/products/1, .parent để quay về 1 bước trước http://localhost:4200/ + products/list từ this.routerService.navigate truyền vào.
    this.routerService.navigate(['products/list'], {
      relativeTo : this.activatedRoute.parent //gán dạng key: value //http://localhost:4200 + /products/list
    });
  }
  


  //cấu hình đường link khi nhấn nút edit. 
  //khi nhấn btn edit cho thành phần detail 1 thì thì link sẽ đc cấu hình thành: 
  //  http://localhost:4200/products/edit/1, ta phải cấu hình để đường dẫn nó ra đc như vậy.
  onEdit(){
    //đang ở http://localhost:4200/products/1, bấm edit thì về http://localhost:4200/products/edit
    // this.routerService.navigate([`products/edit/${this.product.id}`], { //vì có biến $ nên đổi thành dấu `` thay vì dấu '' như ở trên
    this.routerService.navigate([`products/edit`, this.product.id], {  //HOẶC CÁCH KHÁC ĐỂ GỌI product.id
      relativeTo : this.activatedRoute.parent //gán dạng key: value //http://localhost:4200 + /products/edit
    });

  }


  onDelete(){

  }

}
