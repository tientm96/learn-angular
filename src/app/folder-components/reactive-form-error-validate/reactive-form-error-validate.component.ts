import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reactive-form-error-validate',
  templateUrl: './reactive-form-error-validate.component.html',
  styleUrls: ['./reactive-form-error-validate.component.css']
})
export class ReactiveFormErrorValidateComponent implements OnInit {

  //Khai báo input control, dùng để nhận input gửi qua có mã ='control'
  //Ở đây sẽ nhận input gửi qua từ reactive-form2.component qua, gửi qua theo từng control.
  @Input('control') control;

  //truyền tên của control đó qua. 
  @Input('controlname') controlName;

  

  constructor() { }

  ngOnInit() {
  }

  //VALIDATE DỰA TRÊN 1 COMP VALIDATE RIÊNG: CHÍNH LÀ COMP NÀY.

    /*CHÚ Ý: TỰ NGHIÊN CỨU THÊM VIỆC VALIDATE DỰA TRÊN CÁC CONTROL KHÁC, HOẶC CHÍNH NÓ.
    vd: validate password dựa trên password cũ, nếu đổi nhập pass mà nhập pass cũ thì sẽ báo lỗi "đây là pass cũ, đã đổi vào ngày..."
    */ 

    

  // Phương thức dạng getter, có thể gọi như 1 thuộc tính/biến bên html, chỉ cần gọi message là đủ.
  //Getter là cách thứ 2 để nhận vào giá trị input, nó có thể lắng nghe đc giá trị truyền vào.

  get message(){
    //log ra để F12 sẽ thấy các lỗi đc gửi từ comp reactive-form2 sang.
    // console.log(this.control);
    
    //gửi qua là: formUser.controls.fullname nên .errors là gọi tới thành phần errors trong control, cũng giống như gọi trực tiếp thôi.
    for(let err in this.control.errors){
      if(this.control.dirty){ //dirty=true: đã nhập dl
        //truyền vào err và 
        return this.getErrorMessage(err, this.control.errors[err]);
      }
    }
  }

  //cấu trúc ${value.requiredLength} để gọi biến trong dấu ``(trên dấu tag). 
  getErrorMessage(err, value){
    let messages = {
      // 'required' : 'Required: fullname is required',
      'required' : `${this.controlName} is required`,
      'minlength' : `Minlength : ${value.requiredLength} character`,
      'maxlength' : `Maxlength : ${value.requiredLength} character`,


      /*CHÚ Ý: 
      Chỉ 1 comp xét validate là đc r, vì gửi qua control nào có lỗi thì message===difined và nó mới in ra (qua html xem đk ngIF).
      Vậy nên nhiều control có thể gọi <comp validate> và truyền input qua comp này cùng 1 lúc.

      Vậy nên ở đây ta sẽ xét validate cho all trường hợp, gặp cái nào nó hiện ra cái đó.
      Trong TH truyền qua là email thì sẽ đụng tới pattern.
      */
      'pattern' : `${this.controlName} isn't format`

    }
    // console.log(messages[err]);

    //truyền vào lỗi nào, nếu có trong danh sách thì nó sẽ in ra lỗi đó theo, so sánh theo key trong biến let.
    //nếu là lỗi required thì trả về chuỗi 'Required: need input'
    return messages[err];
  }

}
