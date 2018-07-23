import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
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

  @Input() name: string = 'Tiến bình thường';

  
  constructor() { }

  ngOnInit() {
  }

}
