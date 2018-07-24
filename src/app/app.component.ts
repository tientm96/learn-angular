import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nameComp = 'Tèo Nguyễn';
  ageComp = 18;
  
  total = 0;

  public a : number;
  public b : number;

  isDestroy = false;

  onHandleDestroy(){
    this.isDestroy = !this.isDestroy;
  }

  amount(){
    this.total = this.a + this.b;
  }
}
