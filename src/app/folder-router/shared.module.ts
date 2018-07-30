
/* Module tự tách ra: là module con của app.module.ts.
Tách ra để import các class hay directive dùng chung như pipe hay service...
(Tên shared là để dùng chung, giống như shared.html trong Asp MVC, nếu muốn đặt khác thì cũng đc.)

Vì là module con tự tách ra nên phải import lại trong app.module.ts và gọi xuống phần import, vì AppModule là module chính.

***Chú ý: app.module.ts chỉ nhận vào 1 module con, vã đã nhận vào là app-routing.module, nên ko thể nhận thêm module shared này.
Nên ở đây nếu muốn tách thì tách trong app-routing.module, rồi import sharedModule vào app-routing.module(sẽ đc import vào AppModule). 

-Mỗi thành phần chỉ import trong 1 module, nên nếu tách thành phần nào ra rồi thì phải xóa chúng trong module cũ.
Chúng chỉ đc nằm trong 1 module nhất định.


FILE NÀY CHỈ VIẾT RA ĐỂ BIẾT SHARED MODULE LÀ NTN, CHỨ KO LÀM ĐẾN, ĐỂ VẬY THÔI LÀ ĐC RỒI.
*/ 

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Tách 1 vài pipe qua
// import { CapitalizePipe } from './folder-pipes/capitalize.pipe';
// import { EvenOddPipe } from './folder-pipes/even-odd.pipe';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    //một số pipe dùng chung tách qua đây, 1 số để lại bên app.module.ts, tách qua mẫu thôi.
    // CapitalizePipe,
    // EvenOddPipe
  ],

  // để nói nó là module dùng chung cho all comp: thì đưa vào declarations thì phải exports ra cái đó
  // exports: [
  //   CommonModule
  //   CapitalizePipe,
  //   EvenOddPipe
  // ]

})
export class SharedModule { }
