import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  /*string: kdl bình thường. Kiểu này ta có thể so sánh 2 chuỗi === nhau.

String: object. Là kiểu hỗn hợp. Kiểu này ta ko thể so sánh 2 chuỗi được, vì ngoài giá trị 2 chuỗi còn các thuộc tính khác.
(ko thể so sánh object như so sánh kdl bình thường)
  */

  /*Ứng dụng Output vào để gửi sự kiện từ person.ts qua list-person.ts: Xem các file child.comp.ts để hiểu rõ hơn về Output.
    -Import EventEmitter, Output ở dòng trên cùng
    -Khai báo sự kiện phải có @Output eventname = new EventMiter<kiểu dl tham số truyền từ đây qua list-person.html>();.
    -eventname.emit(tham số truyền đi): để kích hoạt sự kiện truyền đi, đồng thời gửi param truyền đi đó.

    -event removePerson đã đc tạo ở đây, qua list-person.html ta chỉ cần gọi đến event removePerson: <app-person (removePerson)="removePersonByName($event)"></app-person>
        +person.comp.ts gửi (removePerson) đến list-person.comp.html, nhưng lúc này removePerson chưa có tác dụng vì chưa đc kích hoạt.
        +tại person.comp.html, mỗi lần kích btnXóa thì event removePerson lại đc kích hoạt(gọi đến removePerson.emit(name)), 
        nên (removePerson) bên list-person mới có tác dụng, mới hoạt động.

    =>Tóm lại: ở đây html bấm Xóa thì kích hoạt event removePerson, làm cho event removePerson đã đc gọi bên list-person.html có tác dụng, sẽ thực thi sự kiện đó.

    -Tại list-person.html: ( <app-person (removePerson)="removePersonByName($event)"></app-person> ): Vì chưa biết param là gì, nên ta luôn để là $event. 
      +(removePerson): là sự kiện output đc gửi từ person.ts qua, sự kiện này gửi thêm param qua, param này đc đưa vào $event.
      +gửi param qua bằng cách removePerson.emit(param truyền qua);
      +ở đây param truyền qua là chuỗi, nên để tiện cho việc so sánh thì param truyền vào phải là string chứ ko phải String (vì String là object khó so sánh).
      -->
  
  */


  //khai báo các biến để nhận input truyền vào từ app.comp.html(comp cha)
/* bên app.comp.html sẽ gọi đến comp person và truyền dl vào comp person này:
  <app-person name="Tèo Nguyễn" age="18"></app-person>
  <app-person name="Tí Nguyễn" age="15"></app-person>

  -tại comp person.ts ta chỉ cần import, rồi khai báo biến như 2 dòng bên dưới để nhận dl truyền vào.
*/

  /* Có 2 cách đặt tên biến input: Với keyname là tên input đc gọi ở comp cha
  (nếu comp cha muốn gọi tới input này thì nó sẽ gọi keyname và gắn giá trị vào keyname)

  +@Input() tenbienInput: kdl;  Cách này thì tenbienInput === keyname

  +@Input('keyname') tenbienInput : kdl;  Cách này thì tenbienInput có thể !== keyname

  */

  //Dùng cách truyền bằng keyname
  // @Input('name') Name : string = 'ABC'; 

  //Có thể gắn giá trị default hoặc ko. Giá trị default sẽ đc dùng nếu như input ko đc truyền giá trị vào.
  @Input() name: string = 'Tên Còn Trống';
  @Input() age: Number;


  @Output() removePerson = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  removeByClick(){
    this.removePerson.emit(this.name);
  }

}
