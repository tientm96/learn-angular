import { Component } from '@angular/core';


/* ngContent giúp tạo ra những comp làm khung sườn, tức là làm những khung bao bên ngoài cho những comp khác.

phân vùng để đỗ dl vào. Dữ liệu đc đưa vào đi kèm mỗi khi gọi comp này ra. 

<com này>dl đưa vào mỗi khi gọi nó ra ở comp khác</com này>

- Chỉ truyền luôn vào class chính, truyền vào 1 chỗ :
Ở đây ta truyền <ng-content></ng-content> trong class="card" là class tạo 1 khung bọc xung quanh.

Lúc này trong app.component.html(page chính), ta khai báo comp này: <app-card><p>Khoa phạm training</p></app-card> 
    với dl truyền vào là Khoa phạm training, dữ liệu truyền vào đó sẽ đc đưa vào vị trí <ng-content></ng-content>, nên nó sẽ đc nằm trong khung bọc.

-ngContent: có tính chất tái sử dụng khung viền đó mà ko cần phải khai báo lại. Chỉ cần gọi comp đó ra và truyền dl vào là đc.

-Truyền vào các class khác nhau, truyền vào nhiều chỗ thì ta dùng select để phân biệt class cần truyền vào:
+phân biệt bằng select .card-header hay .body-header

vd: bên app.comp.html: <p class="card-body">Khoa phạm: nhiều chỗ-vào body</p> sẽ truyền vào vị trí <ng-content> trong class body.

*/ 

@Component({
  selector: "app-card",
  template: `
        <div class="card">
            <ng-content></ng-content>
            
            <div class="header">
                <ng-content select=".card-header"></ng-content>
            </div>
            <div class="body">
                <ng-content select=".card-body"></ng-content>
            </div>

        </div>
    `,
  styles: [
    `
      .card {
        padding: 5px;
        margin: 5px;
        background: #fff;
        border-radius: 2px;
        display: inline-block;
        width: 300px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
          0 6px 6px rgba(0, 0, 0, 0.23);
      }
    `
  ]
})
export class CardComponent {}