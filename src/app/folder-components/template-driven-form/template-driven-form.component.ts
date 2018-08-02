import { Component, OnInit } from '@angular/core';
import { User } from '../../folder-models/user.class';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  public username : string;
  public password : string;
  public fullname : string;
  public email : string;
  public phone : number;

  // đã ngModel cho từng thuộc user.thuoctinh
  public user: User = new User(this.username, this.password, this.fullname, this.email, this.phone);;

  constructor() { }

  ngOnInit() {
  }

  /*Đã import NgForm ở trên, để gọi ra cho tường minh, thực chất ko gọi ko import cũng đc.
  */
  onSubmitForm(frmUser : NgForm){

    // nếu thỏa tất cả validate thì mới in ra.
    if(frmUser.valid){
      console.log(this.user);
      console.log(frmUser.value);
    }
  }

  // Hàm này sẽ reset lại mọi giá trị đang nhập của form.
  onResetForm(frmUser : NgForm){
    frmUser.reset();
  }

}
