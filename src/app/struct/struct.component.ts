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

  //tạo biến action cho ngSwitch
  action: string = ''; //có string hay ko đều được

  constructor() { }

  ngOnInit() {
  }

  //ES6 so sánh phải === nghĩa là bằng 1 cách nhất quán, bằng kể cả kdl.
  useActionSwitch(){
    return this.action = this.action === '' ? 'like' : (this.action === 'like' ? 'love' : '' );
  }

}
