import { Component } from '@angular/core';


/* ngContent: phân vùng để đỗ dl vào. Dữ liệu đc đưa vào đi kèm mỗi khi gọi comp này ra. 

vd:trong app.comp.html sẽ gọi comp này ra và truyền dl vào (NHƯNG KO PHẢI TRUYỀN THEO KIỂU @INPUT, MÀ LÀ TRUYỀN <comp>DL Ở GIỮA <comp> THẺ NTN)
    
<com này NẾU TRUYỀN THEO @INPUT THÌ PHẢI TRUYỀN TRONG NÀY>dl đưa vào mỗi khi gọi nó ra ở comp khác</com này>

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
            <h1>ng-content nhận những cái ko đk nào cả</h1>
            <ng-content></ng-content>
            <br>

            <h1>ng-content nhận theo đk class</h1>
            <ng-content select=".card-header"></ng-content>
            <br>
            <ng-content select=".card-body"></ng-content>
            <br>
            <ng-content select=".myClass"></ng-content>
            <br>

            <h1>ng-content nhận theo đk thẻ h4</h1>
            <ng-content select="h4"></ng-content>
            <br>

            <h1>ng-content nhận theo đk thẻ (div myAttr), div hay p hay h đều đc </h1>
            <ng-content select="[myAttr]"></ng-content>
            <br>

            <h1>ng-content nhận theo đk thẻ (span course="angular6"), span hay div hay p đều đc</h1>
            <ng-content select="[course=angular6]"></ng-content>
            <br><br>

            <h1>Multi Attribute: ng-content nhận theo đk thẻ (p handsome demo) </h1>
            <ng-content select="[handsome][demo]"></ng-content>
            <br>

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