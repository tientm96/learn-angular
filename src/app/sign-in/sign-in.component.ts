import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})


/*Hầu hết ứng dụng thu thập thông tin người dùng qua các form. Angular hỗ trở xử lý form input rất tốt.
Đã học cách xử lý tập tin qua input bằng two-way binding, event binding.

Tuy nhiên đối với các form nhập liệu lớn hơn, thì cách thu thập thông tin qua từng input sẽ gặp khó khăn.
=>giải pháp: gộp các input đó thành các form để có sử dụng tốt hơn.

Bài toán này: ta tạo ra 2 input và gộp 2 input đó lại thành 1 form. (xem trong file html)
-----------------------------------
Bài 44: Sử dụng ngForm để thực hiện bài toán trên (Qua html xem giải thích)


*/

export class SignInComponent implements OnInit {
  email = ''; //tạm thời rỗng, [(ngModel)] sẽ auto gắn giá trị cho nó.
  password = '';

  constructor() { }

  ngOnInit() {
  }

  // onSubmit(){
  //     console.log(this.email, this.password);
  // }

  //ở đây formSignIn chỉ là 1 tham số hàm bình thường thôi, muốn đặt tên gì cũng đc.
  //tham số ở đây để nhận tất cả input truyền từ ngForm(trong html) về, bằng cách gọi hàm này trong thẻ form trong html(qua đó mà xem).
  onSubmit(formSignIn){
      console.log(formSignIn.value); //.value có giải thích bên phần cuối giải thích của html.
  }

}

