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

  //mảng dùng để học pipe sắp xếp arraynumber; và cũng là mảng học pipe lấy chẵn lẽ: even-odd
  public arrNumber = [1, 3, 2, 4, 7, 10];
  public sortValue = 1;
  public evenValue = 1;


  //biến để học pipe viết hoa chữ đầu kể cả có dấu
  // name : string = ''; có string hay ko đều đc.
  name = '';

  //tạo mảng để làm bài tập về sắp xếp và lọc (filter)
  public products2 : any[] = [
    {
      id : 1,
      name : 'Dell n5110',
      price: 500
    },
    {
      id : 2,
      name : 'Iphone 7',
      price: 300
    },
    {
      id : 3,
      name : 'Samsung s7',
      price: 100
    },
    {
      id : 4,
      name : 'Lenovo',
      price: 600
    },
    {
      id : 5,
      name : 'Nokia',
      price: 200
    },
    {
      id : 6,
      name : 'BPhone',
      price: 800
    }
  ]    

  //2 biến phục vụ cho bài tập sort: sort.pipe.ts
  // Nếu truyền vào từ html cho sortByBT = 'name' thì sx theo name, còn sortByBT='price' thì sx theo price.  
  // sortValueBT chỉ là giá trị luân phiên 1/-1 để điều khiển sx tăng hay giảm thôi.
  public sortByBT : string = 'name'; //mặc định là name.
  public sortValueBT : number = 1; //price: 1 sx tăng, -1 sx giảm


  constructor() { }
  ngOnInit() {
  }


  //hàm ko trả về gì cả thì nên để :void, nếu ko để cũng ko sao.
  // onHandleSort(value) : void{
  //   this.sortValue = value;
  // }
  onHandleSort(value){
    this.sortValue = value;
  }
  onHandleEven(value){
    this.evenValue = value;
  }

  // Nếu truyền từ html vào là 'name' thì sx theo name; nếu truyền từ html vào là 'price' thì sx theo price.
  //    sortByBT là giá trị quyết định sẽ sx theo name hay price.

  //Vì ban đầu khi mới render lên thì mặc định sẽ là name và 1: mặc định là sx tăng dần theo name. 
  //Nên khi kích vào tiêu đề Name/Price thì phải this.sortValueBT = -this.sortValueBT; để cho nó đổi
  //  chế độ sx tăng/giảm luân phiên sau mỗi lần kích.
  onSort(value){
    this.sortByBT = value;
    this.sortValueBT = -this.sortValueBT;

    console.log(this.sortValueBT);
  }


}
