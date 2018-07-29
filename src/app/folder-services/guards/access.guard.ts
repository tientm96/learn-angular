/*teminal: "ng g guard access" (my-new-guard) để tạo nhanh file: access.guard.ts
+default file tạo ra là dạng canactive,  nên phải sửa lại tên và các import thành dạng candeactive và xóa những import ko cần.
+candeactive yêu cầu truyền vào comp cần sd service candeactive này.
*/

import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';

import { RouterHomeComponent } from './../../folder-components/router-home/router-home.component';






@Injectable(
  // { providedIn: 'root' }
)

export class AccessGuard implements CanDeactivate<RouterHomeComponent> {
  
  
  canDeactivate(){

    //nếu biến toàn cục localStorage với key là 'key' mà difined thì: cho true, undifined thì false.
    // true: có thể thoát ra khỏi các path sd Guard này,
    // false: KO thể thoát ra khỏi các path sd Guard này.
    if(localStorage.getItem('key')){
      
      //xóa trạng thái của nó, để mỗi lần f5 lại ko bị dính trạng thái cũ. Hoặc dùng tay xóa cokie cũng đc.
      //tương tự như logout bên app.component.ts
      // localStorage.removeItem('key');
      // localStorage.clear();

      //Đã removeItem trong hàm ngOnInit() của router-home.component.ts, mỗi lần gọi đến comp đó thì nó lại remove key 'key'.


      return true;
    }
    return false;
  }
}






