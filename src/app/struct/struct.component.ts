import { Component, OnInit } from '@angular/core';


// Dùng lệnh ng g c struct để tạo component struct có đầy đủ 4 file.

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {

  //tạo biến để sd ngIf
  isShow = true;

  //tạo mảng để sử dụng ngFor
  arrSubjects = ['Angular', 'Nodejs', 'Reactjs'];

  constructor() { }

  ngOnInit() {
  }

}
