import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  name = ''; //khai báo biến name rỗng
  name2 = ''; //two-way binding, dùng cho cách 4 sử dụng ngModel.
  name3 =''; isHighLight = true;
  evenStyle= { color: 'red', fontSize: '40px'}; //chẵn (số lượng chữ nhập vào là chẵn)
  oddStyle= { color: 'black', fontSize: '20px'}; //lẽ

  current = { circle: !this.isHighLight, square: this.isHighLight};
  
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


  /*cách 4.2: two-way binding bằng cách dùng thuộc tính directive: https://angular.io/guide/architecture-components#data-binding
  Trong link có dòng: <input [(ngModel)]="hero.name">  dòng này để dùng trong file html.
  
  Ở file ts chỉ cần khai báo name2='', còn việc gán các giá trị thay đổi cho name2 đã có ngModel lo.
  Chỉ cần qua html gắn name2 với ngModel là đc.
  */

}
