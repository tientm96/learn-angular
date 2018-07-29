import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }



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


  //bấm btn logout thì nó sẽ hủy biến toàn cục localStorage, nếu biến này difined với key là user.
  logout(){
    if(localStorage.getItem('user')){
      localStorage.removeItem('user');
      // localStorage.clear();


      //nếu ko remove thì nó sẽ lưu lại trạng thái của localStorage sau mỗi lần F5 đều v tự login vào đc. 
      //nên phải remove, hoặc xóa cokie của trình duyệt.
    }

    //bấm btn logout thì sẽ chuyển về đường dẫn mặc định là /index (home)
    //dùng navigate để định dạng lại đường link.
    this.router.navigate(['']);
  }
}
