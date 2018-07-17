import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-sign-up2',
  templateUrl: './sign-up2.component.html',
  styleUrls: ['./sign-up2.component.css']
})

/*Reactive Forms: https://angular.io/guide/reactive-forms ---- MỌI GIẢI THÍCH BAN ĐẦU XEM TRONG sign-up.component.ts
  TRONG SIGN-UP2 NÀY: copy từ sign-up qua, bắt đầu từ bài Bài 55: Form builder  để làm riêng cho tiện.
*/

export class SignUp2Component implements OnInit {

  formSignUp: FormGroup; 

  //Nếu dùng FormGroup làm formgroup, như ở sign-up.comp.ts
  // constructor() { 
  //   this.formSignUp = new FormGroup({
  //     email: new FormControl('tientm96@gmail.com'),
  //     password: new FormControl(),

  //     subject: new FormGroup({
  //       nodeJS: new FormControl(false), 
  //       angular: new FormControl(true),
  //       reactJS: new FormControl(false)
  //     }),
  //   });
  // }

  //Bài 55: dùng FormBuilder làm formgroup.
  constructor(private fb: FormBuilder) { //khai báo và angular sẽ tự động new ngầm (Nếu kb trong ( ))
    // this.formSignUp = fb.group({  //thay vì new FormGroup trong FormGroup
    //   email: 'tientm96@gmail.com', //thay vì new FormControl('tientm96@gmail.com') trong FormGroup
    //   password: '', //thay vì new FormControl() trong FormGroup

    //   subject: fb.group({
    //     nodeJS: false, //thay vì new FormControl(false) trong FormGroup
    //     angular: true,
    //     reactJS: false
    //   }),
    // });
  }

  /*Thường thì các khởi tạo Angular khuyến nghị ta nên viết trong ngOnInit(), chứ ko biết trong constructor
  Constructor chỉ để khởi tạo ngầm 1 biến trong () thôi.
  Muốn gọi biến khởi tạo trong comp thì dùng this.tênbien: this.fb
  */
  ngOnInit() {
    this.formSignUp = this.fb.group({  //this.fb: gọi đến object fb đc khởi tạo trong khai báo constructor, nó xem như khởi tạo ở bên ngoài 
        email: 'tientm96@gmail.com',
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
