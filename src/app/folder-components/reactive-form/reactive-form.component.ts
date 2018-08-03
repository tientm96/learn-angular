import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
  public formUser: FormGroup; 

  //fb là Injection dependences, ta Inject vào constructor để tạo đối tượng.
  constructor(private formbuilder: FormBuilder) {}

  //khởi tạo form trong ngOnInit, hàm này sẽ đc tự động chạy ngay sau hàm tạo
  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.formUser = this.formbuilder.group({  

      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)] ],  
      password: ['', Validators.required ],  
      fullname: [''],  
      
      email: ['', Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')],  
      phone: ['']

    });

    //khởi tạo giá trị ban đầu cho form.
    this.formUser.setValue({
      username : 'minhtien',
      password : '',
      fullname : 'minhtientran',
      email : 'tien@gmail.com',
      phone : '01663538331'
    });



    // Kiểm tra sự thay đổi của form, mỗi lần thay đổi value của 1 input nào đó trong form thì sẽ được phát hiện: 
    //Dùng subscribe để lắng nghe sự thay đổi.
    this.formUser.valueChanges.subscribe(data => {
      // console.log(data);
    })


  }

  onSubmitForm(){
    //In ra các giá trị của form
    // console.log(this.formUser.value);

    //In ra toàn bộ form.
    //log formUser ra F12 để thấy các thành phần đi đến validate:phải đi theo thứ tự "FormGroup>controls>email>errors" sẽ thấy các validate của email.
    //tương tự như bên sign-up3.component.html
    console.log(this.formUser); 

  }

    // Hàm này sẽ reset lại mọi giá trị đang nhập của form.
    onResetForm(){
      this.formUser.reset();
    }
  

}
