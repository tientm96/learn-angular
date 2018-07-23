import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})

export class Parent2Component implements OnInit {

  //tạo các biến chứa các giá trị gửi qua input cho comp child2
  public isMarried : boolean = false;
  public age : number = 18;

  //tạo mảng users để gửi bằng input qua comp user-list
  public users : any[] = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      phone: 111
      // phone: '0111'
      // numbẻ thì ko để 0111 đc mà chỉ là 111. nếu muốn có số 0 thì phải string
    },
    {
      id: 2,
      name: 'Nguyễn Văn B',
      phone: 222
    },
    {
      id: 3,
      name: 'Nguyễn Văn C',
      phone: 333
    },
    {
      id: 4,
      name: 'Nguyễn Văn D',
      phone: 444
    },
    {
      id: 5,
      name: 'Nguyễn Văn E',
      phone: 555
    }
  ]

    //tạo các biến nhận các giá trị gửi từ output comp con child2, sang comp cha này.
    public fullname : string = '';
    public phonenumber : number;

    check = false;


  constructor() { }

  ngOnInit() {
  }


  //kdl có hay ko đều đc, nếu biết rồi thì tốt nhất nên để kdl vào
  // onGetFullName(value: string){
  //   this.fullname = value;
  // }
  
  onGetFullName(value){
    this.fullname = value;
  } 
  
  onGetPhoneNumber(value: number){
    this.phonenumber = value;

    //thêm dl vừa nhận đc từ output của child2 vào mảng user.
    //phải thêm dưới hàm này, vì hàm này thực thi sau cùng các dl đã đc nhận và đc gắn vào đầy đủ.
    var elementUser : any = {
      id: 6,   //id chỉ tượng trưng thôi, ở đây ta ko làm tự ++
      name: this.fullname, 
      phone: this.phonenumber
    };

    this.users.push(elementUser);
    this.check = true;  //nếu true mới cho hiện lên dòng thông báo đã push
  }

}
