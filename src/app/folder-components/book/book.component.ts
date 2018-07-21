import { Component, OnInit } from '@angular/core';

// Dùng lệnh ng g c book để tạo component book có đầy đủ 4 file.

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }

  /*life cycle hooks: là cách để thực thi hành động nào đó, khi các sự kiện comp diễn ra như khi comp thay đổi trạng thái,
  create, destroy, khi render các try component bên trong nó...

  Vào https://angular.io/guide/lifecycle-hooks để xem thêm chi tiết.
  
  -để dùng lifecycle-hooks thì kế thừa interface OnInit, nên có override method ngOnInit(),
  hàm này đc chạy ngay sau constructor(): là thời điểm thích hợp để lấy dl trên server hoặc lấy dl các thuộc tính comp.

  */
  ngOnInit() {


  }

}




