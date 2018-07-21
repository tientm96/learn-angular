import { Component, OnInit } from '@angular/core';


// Dùng lệnh ng g c struct để tạo component struct có đầy đủ 4 file.

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {

  //tạo biến để sd ngIf
  isShow = true;

  //tạo mảng để sử dụng ngFor
  //public arrSubjects: string[] = ['Angular', 'Nodejs', 'Reactjs'];
  public arrSubjects = ['Angular', 'Nodejs'];


  /*TRACKBY TRONG NGFOR:
  Ban đầu binding mảng products, lúc sau cập nhật binding mảng productsFromServers lên. 
  Nhờ vào trackBy nên chỉ binding những phần tử mới, còn 3 phần tử đầu vì đã tồn tại (vì binding products lên trước) nên sẽ ko binding lại => Hiệu suất tốt hơn.
  */
  public products : any[] = [
    {
      id : 1,
      name : 'Iphone 6 plus',
      price : 1000
      // image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2016/1/4/635874987873313312_iphone-6-silver-5.jpg'
    },
    {
      id : 2,
      name : 'Galaxy s6',
      price : 2000
    }
  ]

  public productsFromServers : any[] = [
    {
      id : 1,
      name : 'Iphone 6 plus',
      price : 1000
      // image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2016/1/4/635874987873313312_iphone-6-silver-5.jpg'
    },
    {
      id : 2,
      name : 'Galaxy s6',
      price : 2000
    },
    {
      id : 3,
      name : 'Galaxy s7',
      price : 3000
    },
    {
      id : 4,
      name : 'note 7',
      price : 4000
    },
    {
      id : 5,
      name : 'oppo neo 7',
      price : 5000
    }
  ]

  //tạo function để sd trackBy trong ngFor, qua html xem.
  myTrackByFunction(index, item){
    return item.id;
  }

  onLoadData(){
    this.products = this.productsFromServers;
  }


  //tạo biến action cho ngSwitch
  action: string = ''; //có string hay ko đều được

  constructor() { }

  ngOnInit() {
  }

  //ES6 so sánh phải === nghĩa là bằng 1 cách nhất quán, bằng kể cả kdl.
  useActionSwitch(){
    return this.action = this.action === '' ? 'like' : (this.action === 'like' ? 'love' : '' );
  }

}
