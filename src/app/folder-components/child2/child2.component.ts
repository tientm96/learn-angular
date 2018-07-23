import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child2",
  templateUrl: "./child2.component.html",
  styleUrls: ["./child2.component.css"]
})
export class Child2Component implements OnInit {
  /*
  -Có 2 cách đặt tên biến input: Với keyname là tên input đc gọi ở comp cha
  (nếu comp cha muốn gọi tới input này thì nó sẽ gọi keyname và gắn giá trị vào keyname)

  +@Input() tenbienInput: kdl;  Cách này thì tenbienInput === keyname
  +@Input('keyname') tenbienInput : kdl;  Cách này thì tenbienInput có thể !==/=== keyname
  */

  //Dùng cách đặt tên biến input !== keyname
  // @Input('married') isMarried : boolean = false;

  //Dùng cách đặt tên biến input === keyname
  @Input() married: boolean = true;

  //Có thể gắn giá trị default hoặc ko. Giá trị default sẽ đc dùng nếu như input ko đc truyền giá trị vào.
  @Input() age: number = 20;

  @Input() name: string = "Tiến bình thường";

  //Output: biến này là dl output gửi từ child2 comp qua parent2 comp.
  public txtFullName: string;
  public txtphoneNumber: number;


  constructor() {}

  ngOnInit() {}



  //tạo ra keyname đồng thời là tên biến sự kiện output, kèm theo <kiểu dl tham số cần truyền qua parent2>, nếu ko biết kdl gì thì để <any>.
  // @Output() onHandleFullName = new EventEmitter<any>();
  @Output() onHandleFullName = new EventEmitter<string>();
  @Output() onHandlePhoneNumber = new EventEmitter<number>();


  //cách khác: truyền keyname !==/=== tenbienOutput (biến thì sd cho child comp, còn keyname là để gọi bên parent comp)
  // @Output('onHandleFullName') myClick = new EventEmitter<boolean>();

  //mỗi lần gọi đến sk này thì sẽ gửi dl txtFullName qua comp cha, thông qua biến output onHandleFullName.
  onSubmitForm() {
    this.onHandleFullName.emit(this.txtFullName);
    this.onHandlePhoneNumber.emit(this.txtphoneNumber);
  }

}
