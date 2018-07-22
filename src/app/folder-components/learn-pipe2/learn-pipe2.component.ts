import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe2',
  templateUrl: './learn-pipe2.component.html',
  styleUrls: ['./learn-pipe2.component.css']
})
export class LearnPipe2Component implements OnInit {

  //1 dòng '', nhiều dòng ``
  public content : string = `Thiết kế quen thuộc
                            Máy được hoàn thiện từ kim loại nguyên khối,
                            kết hợp với mặt kính cong nhẹ 2.5D cho cảm giác vuốt chạm thoải mái hơn.`

  public products : any[] = [
    {
      id : 1,
      name : 'Dell n5110',
      status : true
    },
    {
      id : 2,
      name : 'Iphone 7',
      status : false
    },
    {
      id : 3,
      name : 'Samsung s7',
      status : false
    },
    {
      id : 4,
      name : 'Lenovo',
      status : true
    }
  ]    
  
  //nhập dl vào 3 ô input này, nó sẽ lọc ra theo dl nhập vào, kiểu như search
  public idFilter: string;
  public nameFilter: string;
  public statusFilter: string;

  //mảng dùng để học pipe sắp xếp arraynumber
  public arrNumber = [1, 3, 2, 4, 7];
  public sortValue = 1;


  constructor() { }

  ngOnInit() {
  }


  onHandleSort(value){
    this.sortValue = value;
  }

}
