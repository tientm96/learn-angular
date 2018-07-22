import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';


@Component({
    selector: 'app-parent',

    //$event nhận tham số truyền qua từ child.ts: qua đó xem.

    /*Bai 31: Tạo object. Thay đổi biến thông qua object:
    #child trong <app-child #child>: là tạo ra 1 biến/object child của class child.comp.ts.
        Do đó child có thể gọi đến biến value2 ở child.comp.ts để set lại giá trị cho nó.

        Vậy khi click btn Add for Child thì biến child sẽ gọi đến value2 ở child.comp.ts và set lại giá trị cho value2 đó.

        ***CÁCH 2: DÙNG ViewChild: xem bên dưới
    */

   //$event: thông qua thẻ <app-child>, biến này nhận value gửi qua từ output myClick của comp Child.-->
    template: `
        <h3>{{ value }}</h3>
        
        <app-child (myClick)="changeValue($event);" #child></app-child>
        
        <button (click)="child.value2 = child.value2 + 1">Add for Child-#Child</button> 
        
        <button (click)="onAddForViewChild();">Add for Child-ViewChild</button> 
        
    `
})

/*Sử dụng ViewChild để: gọi luôn component child.ts qua bên parent.ts này:
-add ViewChild vào trong import core.
-import component cần gọi qua đây bằng ViewChild: import { ChildComponent } from './child.component'; 

-Xuống dưới, vào trong class ParentComponent, dùng @ViewChild để gọi comp cần gọi qua đây (comp child.ts) 
và tạo 1 đối tượng bởi comp cần gọi qua đó. 
+Dùng đối tượng đó để thao tác. Đối tượng đc tạo từ comp viewchild cần gọi qua đó đc xem như là comp đó, nó có thể thao tác set lại mọi thuộc tính của comp đó. 

-kéo lên chỗ template thấy button Add for Child-ViewChild, sẽ sử dụng viewchild này.
*/


export class ParentComponent implements OnInit {
    
    value = 0;

    constructor() { }

    ngOnInit() { }

    changeValue(isAdd: boolean){
        isAdd ? this.value++ : this.value--; //isAdd=true thì ++
    }

    //View child
    @ViewChild(ChildComponent)
    myChild: ChildComponent;

    //gọi biến value2 từ ChildComponent
    onAddForViewChild(){
        this.myChild.value2++;
    }
}