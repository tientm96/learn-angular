import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

/*
**Reactive Forms: https://angular.io/guide/reactive-forms
-bên app.module.ts: import ReactiveFormsModule từ @angular/core, rồi gọi ra dưới phần import[].
-trong comp: import FormGroup, FormControl
-trong class chính của comp: xem trong đấy

-Qua html xem cách gọi form ntn. Bên html sẽ truyền dl nhập vào qua cho object formSignUp và các tham số của formSignUp.
Ở đây chỉ cần log ra formSignUp.value là đc.


*/ 
export class SignUpComponent implements OnInit {

  formSignUp: FormGroup; //khai báo thuộc tính formSignUp thuộc class FormGroup(). thuộc tính này nhận các giá trị trả vê từ gắn [formGroup]="formSignUp" của html.
  

  constructor() { 

    //khởi tạo formSignUp trong constructor hoặc onInit(), với các tham số bên trong là các object FormControl()
    this.formSignUp = new FormGroup({
      email: new FormControl('tientm96@gmail.com'), //Đưa các giá trị mặc định vào ('default')
      password: new FormControl(),

      //tạo các FormControl checkbox để nhận các giá trị checkbox gửi từ html về.
      //tạo FormGroup để nhận nguyên 1 object mang gộp các giá trị của checkbox gửi về.
      subject: new FormGroup({
        nodeJS: new FormControl(false), //đưa vào các giá trị mặc định, false là chưa check, true là default=đã check
        angular: new FormControl(true),
        reactJS: new FormControl(false)
      }),


    });
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.formSignUp.value);
  }

}
