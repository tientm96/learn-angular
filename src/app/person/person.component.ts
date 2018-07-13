import { Component, OnInit, Input } from '@angular/core';

// Dùng lệnh ng g c person để tạo component person có đầy đủ 4 file.

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  /*Để nhận input truyền vào từ app.component.html thì phải:
  import Input vào dòng import ở trên cùng.
  Khi khai báo các biến để lấy input thì phải @Input() biến: kdl;
  */ 
 @Input() name: String;
 @Input() age: Number;

  constructor() { }

  ngOnInit() {
  }

}
