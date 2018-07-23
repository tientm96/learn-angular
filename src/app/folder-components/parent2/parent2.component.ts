import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  //tạo các biến chứa các giá trị gửi qua input cho comp child2
  public isMarried : boolean = false;
  public age : number = 18;

  public users : any[] = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      address: 'TP HN'
    },
    {
      id: 2,
      name: 'Nguyễn Văn B',
      address: 'TP HP'
    },
    {
      id: 3,
      name: 'Nguyễn Văn C',
      address: 'TP ĐN'
    },
    {
      id: 4,
      name: 'Nguyễn Văn D',
      address: 'TP HCM'
    },
    {
      id: 5,
      name: 'Nguyễn Văn E',
      address: 'TP CT'
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
