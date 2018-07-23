import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  //biến input users nhận mảng users gửi qua từ parent2 component
  @Input() users : any[] = [];
  @Input() fullname : string;
  @Input() phone : number;

  constructor() {
  }

  ngOnInit() {
    //hàm này chạy ngay sau constructor, muốn log dòng này thì ban đầu phải khởi tạo giá trị ở bên parent2
    // console.log(this.fullname, this.phone);
  }

}
