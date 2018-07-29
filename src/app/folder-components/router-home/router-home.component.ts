/*Bài 40: CanDeactivate
Là ngược lại với CanActive
-là service cho phép người dùng thoát khỏi path router đó hay không
-cú pháp tương tự canactive

-hàm canDeactivate trả về:
+true : có thể thoát ra
+false: ko thể thoát ra.

---------
THỰC HIỆN

-vì CanDeactive cũng là 1 service, nên tạo fodel guards trong folder services, lần này tạo service làm nhiệm vụ candeativate.
-Vào cli, xem cú pháp: teminal: "ng g guard access" (my-new-guard) để tạo nhanh file: access.guard.ts

+default file tạo ra là dạng canactive,  nên phải sửa lại tên và các import thành dạng candeactive và xóa những import ko cần.

+candeactive yêu cầu truyền vào comp cần sd service candeactive này trong implement trong access.guard.ts với <comp sd>.


-Ở đây sd candeactive cho comp Router-Home, mà comp này có module riêng là router-home.module.ts, nên ta import file service
access.guard.ts vào Home module, vào kéo xuống providers thêm vào.

-gọi canDeactivate: [AccessGuard] : cho liên kết path nào muốn giữ lại, liên kế path trong router-home.module.ts.
nếu AccessGuard trả về true thì đc phép thoát ra, còn false thì ko được phép thoát ra.

-để điều chỉnh true/false của access.guard.ts, thông qua comp router-home thì phải dùng 1 biến toàn cục(cả hệ thống đều dùng đc): là biến localStorage(key: value(string)), biến này sẽ đc set,get giá trị theo key, all comp đều sd đc biến này.

-biến localStorage sẽ lưu lại giá trị với key đc set, vậy nên muốn thay đổi trạng thái sau mỗi lần F5 thì phải hủy biến đó, hoặc là xóa cokie của trình duyệt.

*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router-home',
  templateUrl: './router-home.component.html',
  styleUrls: ['./router-home.component.css']
})
export class RouterHomeComponent implements OnInit {

  error = 0;
  success = 0;

  constructor() { }

  ngOnInit() {
    //mỗi lần gọi đến comp này thì nó lại remove key 'key'
    localStorage.removeItem('key');    
  }

  onAccess(key: string){
    //sd biến toàn cục localStorage, mọi comp đều dùng đc, giống như bên CanActivate trong file: router-login.component.ts
    //Dùng biến này để set giá trị theo key: value(string) cho service access.guard.ts.
    // localStorage.setItem('key', key); //key sau: là value set vào cho biến localStorage với key là 'key'

    //nếu key nhập vào ='123456' thì mới cho phép thoát.
    if(key === '123456'){
      localStorage.setItem('key', key); //key sau: là value set vào cho biến localStorage với key là 'key'
      this.success = 1;
    }else{
      //ngc lại nếu người dùng chưa login thì gán -1
      this.error = -1;
    }

  }

}
