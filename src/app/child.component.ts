import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `<button (click)="addForParent();">Add</button>`
})

export class ChildComponent implements OnInit {
    constructor() { }

    ngOnInit() { }


    /*Muốn gửi sự kiện từ child qua parent thì phải:
    Import EventEmitter, Output ở dòng trên cùng
    Khai báo sự kiện phải có @Output eventname = new EventMiter().
    Sau khi khai báo đầy đủ, muốn kích hoạt myclick để có thể gửi sự kiện đi: this.myclick.emit()

    event myClick đã đc tạo ở đây, qua parent ta chỉ cần gọi đến myClick: <app-child (myClick)="value = value + 1"></app-child>
        +child.comp.ts gửi (myClick) đến parent.comp.ts, nhưng lúc này myClick chưa có tác dụng vì chưa đc kích hoạt.
        +tại child.comp.ts, mỗi lần kích btn Add thì myClick lại đc kích hoạt(gọi đến myClick.emit()), nên (myClick) bên parent mới có tác dụng và value bên parent sẽ ++ lên.

    =>Tóm lại: ở đây bấm Add thì kích hoạt myClick, làm cho myClick đc gọi bên parent.ts có tác dụng dẫn đến value++.
    */

    //tạo ra sự kiện output
    @Output() myClick = new EventEmitter();

    //kích hoạt sự kiện output
    addForParent(){
        this.myClick.emit();
    }
} 