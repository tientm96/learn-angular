import { Component, OnInit, OnDestroy } from '@angular/core';

//để lấy params, cụ thể là lấy id cần edit từ url: http://localhost:4200/products/edit/3
//có id thì gọi tới hàm có chức năng edit của service
import { ActivatedRoute, Params } from '@angular/router'; 

//sử dụng đối tượng Subscription để lắng nghe params trên link, nên phải tạo ra và hủy nó đi.
import { Subscription } from 'rxjs';

import { ProductService } from '../../folder-services/product.service';
import { Product } from '../../folder-models/product';



@Component({
  selector: 'app-router-product-edit',
  templateUrl: './router-product-edit.component.html',
  styleUrls: ['./router-product-edit.component.css']
})
export class RouterProductEditComponent implements OnInit, OnDestroy {

  public product : Product = null;
  public subcription : Subscription = null;

  
  constructor(private activatedRoute : ActivatedRoute, private productService : ProductService) { }

  //mỗi lần router tới đường dẫn path: 'edit/:id' thì sẽ tự động đến component này, theo cấu hình trong file router-products.module.ts,
  //do vậy, mỗi lần router tới thì comp đc gọi, và ngOnInit cũng đc gọi. Sẽ lấy đc id từ link edit.
  ngOnInit() {
    this.handleParams();
  }


   //hủy đối tượng subcription mỗi lần kết thúc comp.
   ngOnDestroy() {
    if(this.subcription){
      this.subcription.unsubscribe();
    }
  }


  //Hàm lấy params.
  //để lấy params, cụ thể là lấy id cần edit từ url: http://localhost:4200/products/edit/3
  //có id thì gọi tới hàm có chức năng edit của service
  handleParams(){
    //vì param bên path: 'edit/:id' chỉ mỗi id, nên lúc này id chính là params
    this.subcription = this.activatedRoute.params.subscribe((params: Params) => {
      // console.log(params.id);
      //params.id : là tham số id cần lấy

      let id = (+params.id);  // (+) để chuyển về kdl number, tránh lỗi xung đột kdl
      this.product = this.productService.getProductByID(id); //lấy đc product với id tương ứng, để hiển thị các thành phần lên các ô thông qua ngModel
    });
  }

  //lưu lại các thông tin đã edit
  handleSaveEdit(){
    this.productService.updateProduct(this.product);
  }

}
