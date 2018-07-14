import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/toPromise'; //trong angular 6 thì ko cần dòng này cũng có thể toPromise với get http.



@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css']
})


/*Bài 35: Khái niệm service và http service
Data service: lấy dữ liệu từ server thông qua cái API nào đó.
-Có thể viết Api trong comp để thao tác lây service. Nhưng để cho component tập trung cho việc điều khiển các view, ta viết các service riêng ra.

**CÁC BƯỚC
-Tại app.module.ts: import thư viện Http để lấy service từ server: import { HttpModule } from '@angular/http';
và gọi nó ra dưới phần imports: []
=>Lúc này trong ts ta mới có thể sử dụng Http

-Trong comp này: 
+import { Http } ở trên cùng.
+import toPromise: import 'rxjs/add/operator/toPromise'; 
Vì khi get dl về là dạng Observable, để chuyển dl sang dạng Promise thì phải import toPromise.
(Trong Angular 6 thì đã tích hợp toPromise, nên ko cần import dòng đó nữa.)

+Viết phần lấy service trong constructor




*/ 

export class IpComponent implements OnInit {

  //kb biến để tạo nhận Object http trả về
  ip: String;

  /*Khởi tạo http:
  cú pháp kb biến: (biến: kiểu dl) =>biến http có kiểu dl Http. Chỉ cần khai báo biến, Http nó sẽ tự động new ngầm.
  */
  constructor(private http: Http) { 
     this.http.get('http://ip.jsontest.com/') //lấy dl từ server này về, trả dl về kiểu Observable
     .toPromise() //để chuyển dl sang dạng Promise. Để có toPromise() thì phải import ở trên cùng (Với Angular6 thì ko cần import nữa).
     .then(res => res.json()) //chuyển sang kiểu json
    //  .then(resJson => console.log(resJson)) //log dl đó ra console, resJson chỉ là tên đặt sao cũng đc.
    //  .catch(err => console.log(err)); //nếu có lỗi thì phóng lỗi ra console.
     //Chạy và F12 vào console xem kết quả, nó sẽ log ra object với thuộc tính ip chứa ip.

     .then(resJson => this.ip = resJson.ip)
     .catch(err => console.log(err)); //nếu có lỗi thì phóng lỗi ra console.
    }

  ngOnInit() {
  }

}
