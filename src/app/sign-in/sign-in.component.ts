import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})


export class SignInComponent implements OnInit {
  email = ''; //tạm thời rỗng, [(ngModel)] sẽ auto gắn giá trị cho nó.
  password = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
      console.log(this.email, this.password);
  }
}

