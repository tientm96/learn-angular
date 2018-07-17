import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up3',
  templateUrl: './sign-up3.component.html',
  styleUrls: ['./sign-up3.component.css']
})

/*Reactive Forms: https://angular.io/guide/reactive-forms ---- Bài 56: Validate trong Reactive form

Xem lại các bài 45 và 48:
Vào bài  sign-in.component.html và sign-in2.component.html để xem vd về các dạng validate

Xem bài 48: sign-in2.component.html: thì ta sẽ thấy có giải thích về lỗi required và touched khi kích vào ko nhập/nhập ko đúng r kích ra, 
sẽ thấy đã cấu hình trong file styles.css nên sẽ dùng chung cho mọi ô nhập khác có sử dụng required.

*/


/*Để validate trong reactive form thì phải:   
-import Validators trong '@angular/forms' (nhớ chọn Validators có s)
*/

// Bài này đang ở dạng FormBuilder, ta thêm validator cho nó bằng cách thêm vào chỗ khai báo các params
export class SignUp3Component implements OnInit {

  formSignUp: FormGroup; 

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formSignUp = this.fb.group({  
        /*ở đây sử dụng validator required: nếu lỗi required=true thì trả về invalid=true và valid=false, lúc đó bên html sẽ bị ẩn btn submit */
        email: ['', Validators.required], 
        password: '',
        subject: this.fb.group({
          nodeJS: false, 
          angular: true,
          reactJS: false
        }),
      });
  }

  onSubmit(){
    console.log(this.formSignUp.value);
  }

}
