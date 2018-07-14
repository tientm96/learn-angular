import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {


  birthday = new Date(2015,7,25); //tháng đc tính từ 0->7 nên ghi 7 thì sẽ render ra tháng 8

  person={ name: 'Khoa Phạm', age: 30 }; //tạo 1 object

  //Dùng AsyncPipe:
  //TH1: nếu là kdl string bình thường thì chỉ cần khai báo rồi gọi trong html {{ biến }} là đc.
  addressBT='92 Lê Thị Riêng - BT';
  
  //TH2: nếu là kdl từ server gửi về thì sẽ là kdl phải là Promise của string, nên phải định dạng promise cho nó.
  addressServer= Promise.resolve('92 Lê Thị Riêng - Server gửi về');


  constructor() { }

  ngOnInit() {
  }

}
