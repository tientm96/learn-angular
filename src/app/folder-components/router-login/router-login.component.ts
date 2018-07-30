import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


/*Bài 39: CanActive
-Là 1 service kiểm tra việc cho phép người dùng có vào được router đó hay không. Thường đc dùng cho admin.
Nói cách khác là chặn ko cho người dùng vào router nào đó.
----------
THỰC HIỆN:
-vì CanActive cũng là 1 service, nên tạo fodel guards trong folder services.
-Vào cli, xem cú pháp: teminal: "ng g guard auth" (my-new-guard) để tạo nhanh service canactive với tên file: auth.guard.ts
-import vào router-products.module.ts, vào kéo xuống providers thêm vào.
-gọi canActivate: [AuthGuard]: cho liên kết path nào muốn bảo vệ, liên kế path trong router-products.module.ts.
nếu auth.guard.ts trả về true thì nó cho vào, còn false thì nó ko cho vào path đó.

-để điều chỉnh true/false của auth.guard.ts, thông qua comp router-login thì phải dùng 1 biến toàn cục(cả hệ thống đều dùng đc): 
là biến localStorage(key: value(string)), biến này sẽ đc set,get giá trị theo key, all comp đều sd đc biến này.

-biến localStorage sẽ lưu lại giá trị với key đc set, vậy nên muốn logout thì phải hủy biến localStorage này: 
hủy tại btn logout ở app.component.ts.
*/


@Component({
  selector: 'app-router-login',
  templateUrl: './router-login.component.html',
  styleUrls: ['./router-login.component.css']
})
export class RouterLoginComponent implements OnInit {

  public error : number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    // this.checkLogin();
  }

  checkLogin(){
    if(localStorage.getItem('user')){
      this.router.navigate(['']);
    }
  }


  //nhận các giá trị từ biến template ref variable #biến
  onLogin(username : string, password : string){
    //biến object user có kiểu key:value
    let user = {
      username: username, //key: value, với value là  các params truyền vào. 
      password: password
    };

    // localStorage là biến toàn cục của angular, biến này dùng để kết nối với auth.guard.ts
    //  biến này nhận vào giá key: value(string), ở đây key là user.
    if(username === 'admin' && password === 'admin'){
      localStorage.setItem('user', JSON.stringify(user)); //JSON.stringify: chuyển obj user sang kiểu JSON (string).

      //nếu đúng thì set đường dẫn tới products.
      this.router.navigate(['products']);
    }else{
      //ngc lại nếu người dùng chưa login thì gán -1
      this.error = -1;
    }

  }
}
