import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nameComp = 'Tèo Nguyễn';
  ageComp = 18;
  
  total : number= 0;

  public a : number;
  public b : number;

  isDestroy = false;

  onHandleDestroy(){
    this.isDestroy = !this.isDestroy;
  }

  //Nếu dùng ([ngModel])
  // amount(){
  //   this.total = this.a + this.b;

  //   console.log(typeof this.a, typeof this.b);
  // }
  
 
  //Nếu dùng template reference variable #a, #b
  /*Chú ý: vì là biến template nên nó luôn nhận vào dạng text, dù ta có để input đầu vào là number đi chăng nữa.
  Vậy nên template ref var luôn trả về dạng text ở mọi trường hợp. 

  Muốn chuyển sang số thì ta phải ép kiểu: hoặc là Number(a) hoặc là parseInt(a)*/ 
  amount(a , b){
    console.log(typeof a, typeof b);

    this.total = Number(a) + parseInt(b);
  }

}
