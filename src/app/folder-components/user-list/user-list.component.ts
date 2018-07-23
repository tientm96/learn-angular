import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  //biến input users nhận mảng users gửi qua từ parent2 component
  @Input() users : any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
