import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
                <ng-content></ng-content>
                <br>

                <button (click)="addForParent();">Add</button>
                <button (click)="subForParent();">Sub</button>
                <br><br>
                <h3>{{ value2 }}</h3>
    `
})

export class ChildComponent implements OnInit {

    value2 = 0;

    constructor() { }

    ngOnInit() { }


    /*Muốn gửi sự kiện từ child qua parent thì phải:
    Import EventEmitter, Output ở dòng trên cùng
    Khai báo sự kiện phải có @Output() eventname = new EventMiter().
    Sau khi khai báo đầy đủ, muốn kích hoạt myclick để có thể gửi sự kiện đi: this.myclick.emit()

    event myClick đã đc tạo ở đây, qua parent ta chỉ cần gọi đến myClick: <app-child (myClick)="value = value + 1"></app-child>
        +child.comp.ts gửi (myClick) đến parent.comp.ts, nhưng lúc này myClick chưa có tác dụng vì chưa đc kích hoạt.
        +tại child.comp.ts, mỗi lần kích btn Add thì myClick lại đc kích hoạt(gọi đến myClick.emit()), nên (myClick) bên parent mới có tác dụng và value bên parent sẽ ++ lên.

    =>Tóm lại: ở đây bấm Add thì kích hoạt myClick, làm cho myClick đc gọi bên parent.ts có tác dụng dẫn đến value++.
    */

    /*bài 28: Ouput có tham số
    -TH Ở parent.ts cần nhận tham số từ child.ts truyền về:
    +Vị trí nhận tham số ở parent.ts phải truyền vào LUÔN là tham số $event
    +Ở child mỗi khi xác nhận sự kiện myClick thì truyền kèm theo tham số
    +Ở @Output chỗ new EventEmitter<boolean> phải truyền kiểu dl vào, để khẳng định đúng kdl cần truyền qua bên parent, ở đây khẳng định tham số truyền qua là boolean.
    (nếu ko có <boolean> thì nó sẽ truyền qua bất kỳ cái gì mà sẽ ko báo lỗi)
    
    vd: ở child: this.myClick.emit(true); 
        ở parent: changeValue($event);
        =>thì là truyền tham số true ở child qua tham số $event ở parent mỗi khi myClick đc kích hoạt.

    */


    //tạo ra keyname đồng thời là tên biến sự kiện output, kèm theo <kiểu dl tham số cần truyền qua parent2>, nếu ko biết kdl gì thì để <any>.
    // @Output() myClick = new EventEmitter<any>();
    @Output() myClick = new EventEmitter<boolean>();

    //cách khác: truyền keyname !==/=== tenbienOutput (biến thì sd cho child comp, còn keyname là để gọi bên parent comp)
    // @Output('myClickKey') myClick = new EventEmitter<boolean>();


    //kích hoạt sự kiện output
    addForParent(){
        this.myClick.emit(true);
    }

    subForParent(){
        this.myClick.emit(false);
    }
} 