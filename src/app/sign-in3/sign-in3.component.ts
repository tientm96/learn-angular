import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in3',
  templateUrl: './sign-in3.component.html',
  styleUrls: ['./sign-in3.component.css']
})

export class SignIn3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formSignIn){
      console.log(formSignIn.value);
  }

}

