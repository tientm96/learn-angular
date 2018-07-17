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

  formSignUp: FormGroup; //khai báo thuộc tính formSignUp thuộc class FormGroup().
  

  constructor() { 

    //khởi tạo formSignUp trong constructor hoặc onInit(), với các tham số bên trong là các object FormControl()
    this.formSignUp = new FormGroup({
      email: new FormControl(), //khai báo và khởi tạo tham số luôn 1 lần.
      password: new FormControl()
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.formSignUp.value);
  }

}