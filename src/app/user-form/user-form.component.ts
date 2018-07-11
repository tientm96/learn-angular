import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  name = ''; //khai báo biến name rỗng
  
  constructor() { }

  ngOnInit() {
  }

  showEvent(event){
    // Nếu chỉ xuất ra $event thì console.log($event) ra sẽ có rất nhiều thuộc tính, kích vào mục target sẽ có thuộc tính value là giá trị nối cuối cùng nhận đc, 
    //  nên sẽ gọi đến value để lấy value gán cho name. 
    // Khi đó sau mỗi lần nhập 1 ký tự thì name lại đc gán lại bởi 1 value dài hơn. 
    // console.log(event);

    this.name = event.target.value;

  }

}
