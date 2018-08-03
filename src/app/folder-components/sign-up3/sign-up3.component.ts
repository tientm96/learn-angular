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

  //fb là Injection dependences, ta Inject vào constructor để tạo đối tượng.
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formSignUp = this.fb.group({  
        /*ở đây sử dụng validator required: nếu lỗi required=true thì trả về invalid=true và valid=false, lúc đó bên html sẽ bị ẩn btn submit */

        //có thể .email(lỗi định dạng email), maxlenght, minlength... các loại validate xem trong https://angular.io/guide/reactive-forms 
        // email: ['', Validators.required],  
        // email: ['', Validators.email],  
        // email: ['', gmailValidator],  //TEST VỚI VALIDATOR TỰ VIẾT BÊN DƯỚI

        //TH sử dụng nhiều validator thì để trong []
        email: ['', [Validators.email, Validators.required, gmailValidator] ],  
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

//vào đây để xem các dạng validator có sẵn: https://angular.io/guide/reactive-forms 
//Tự viết 1 validator: vd: email phải có chuỗi @gmail.com

/*Bản chất validator là viết 1 function thôi. 
-truyền vào tham số: đại diện cho formControl hoặc formGroup, đặt tên gì cũng đc nhưng nên đặt đúng với ý nghĩa của nó.
nếu viết validator cho formControl thì đặt tên tham số truyền vào là formControl, ngược lại cho formGroup thì đặt formGroup

*/

function gmailValidator(formControl: FormControl){ //khai báo biến formControl với kdl FormControl, có thể (formControl) chỉ kb báo biến, ko cần kdl
  if(formControl.value.includes('@gmail.com')){ //hàm includes() kiểm tra xem 1 chuỗi có chứa chuỗi khác ko
    return null; //validator trả về null khi ko có lỗi gì 
  }
  
  //ngược lại sẽ trả về có lỗi. Trả về object{ chức lỗi hiện ra trong này }
  //tạo ra biến gmail gán cho nó gtri true, rồi return về biến gmail đó.
  return { gmail : true};
}
