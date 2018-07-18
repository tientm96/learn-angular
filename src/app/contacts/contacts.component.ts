import { Component, OnInit } from '@angular/core';


/*
Bài 58: Routing đơn giản
-Angular mạnh về single page application, chỉ tải 1 lần, khi chuyển giữa các page thì nó ko cần tải lại các trang web. 
-Vậy Làm sao để tạo nhiều page cho app. => Sử dụng Router
-----------------------------

**CÁC BƯỚC
-Tạo folder comp bằng lện ng g c namecomp. (folder comp contacts và contact-detail)

-trong app.component.html: Ko gọi ra kiểu <app-contacts></app-contacts> mà là tạo đường link (Dùng thẻ a trong HTML để tạo links)
Mục tiêu: Click vào link Contacts sẽ hiện comp contacts, click vào link Detail sẽ hiện comp contact-detail.
vd:
  <a href="/contacts">Contacts</a> 
  <a href="/detail">Detail</a>
  Nhưng dùng href thì sẽ refresh lại trang, nên ta đổi href thành routerLink: <a routerLink="/contacts">Contacts</a>  <a routerLink="/detail">Detail</a>

-Trong app.module.ts(nơi khai báo cho các comp): có giải thích cụ thể bên đó.
+import Routes, RouterModule từ @angular/router

+tạo ra biến routesConfig: để config các cái routes (là các hướng chuyển trang)
vd: biến đó sẽ phân biệt: nếu đường dẫn /contacts thì nó chuyển sang ContactsComponent; còn nếu đường dẫn /detail thì nó chuyển sang ContactDetailComponent.

+kéo xuống chỗ imports: [, RouterModule.forRoot(routesConfig)], thêm RouterModule.forRoot(tham số) và truyền vào biến routesConfig đã tạo ở trên.

*/

/*Bài 59: Xử lý route ngoại lệ

-Giống như trong .net, để thiết lập 1 đường dẫn mặc định, hay thiết lập trang chủ như vào http://localhost:4200 thì nó tự động chuyển đến home: http://localhost:4200/home
-ở đây ta muốn http://localhost:4200 thì nó tự động chuyển đến /contacts: http://localhost:4200/contacts

+vào app.module.ts: tại vị trí khởi tạo biến routesConfig, ta thêm 1 đường dẫn tới contacts như sau:  
 { path: '', redirectTo: '/contacts', pathMatch: 'full' }

-Nếu thêm vào link 1 địa chỉ lỗi thì nó sẽ chạy đến trang của comp page-not-found (tự tạo comp này): vd: http://localhost:4200/sajsaksjla là 1 địa chỉ lỗi.\
Thiết lập nó cũng tại vị trí biến routesConfig của app.module.ts, với lệnh:  
 { path: '**', component: PageNotFoundComponent }
(dấu ** ý là ko vào đc tất cả comp nào rồi thì mới chạy đến comp PageNotFoundComponent)

*/

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  //XEM GIẢI THÍCH bên html.
  //tạo 1 mảng chứa danh sách các contact
  contacts = [
    { id: 1, name: 'Teo', phoneNumber: '0123' },
    { id: 2, name: 'Ti', phoneNumber: '0456' },
    { id: 3, name: 'Tun', phoneNumber: '0789' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
