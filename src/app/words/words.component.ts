import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-words",
  templateUrl: "./words.component.html",
  styleUrls: ["./words.component.css"]
})
export class WordsComponent implements OnInit {

  //tạo ra các biến rỗng, để bên html sử dụng [(ngModel)] để gắn dữ liệu cho các biến này, mỗi lần nhập vào nó tự gắn dl.
  newEn = '';
  newVn = '';



  //thêm mảng object để dùng ngFor
  arrWords = [
    { id: 1, en: "action", vn: "hành động", memorized: true },
    { id: 2, en: "actor", vn: "diễn viên", memorized: false },
    { id: 3, en: "activity", vn: "hoạt động", memorized: true },
    { id: 4, en: "active", vn: "chủ động", memorized: true },
    { id: 5, en: "bath", vn: "tắm", memorized: false },
    { id: 6, en: "bedroom", vn: "phòng ngủ", memorized: true }
  ];

  
  constructor() {}

  ngOnInit() {}

  //hàm thêm phần tử vào mảng.
  //nếu muốn thêm vào cuối thì .push, còn muốn thêm vào đầu thì .unshift
  addWord(){
    this.arrWords.unshift({
      id: this.arrWords.length + 1,
      en: this.newEn,   //this.newEn là gọi lên thuộc tính newEn='' ở trên. Thuộc tính này đc gắn với [(ngModel)] nên sẽ nhận đc các dl nhập vào.
      vn: this.newVn,
      memorized: false
    });

    //sau khi add vào thì xóa tráng lại các ô. Vì newEn đc gắn với [(ngModel)], nên dl 2 cái sẽ ăn theo với nhau. 
    //lúc này chỉ cần ta cho newEn, newVn về lại rỗng thì lập tức [(ngModel)] cũng thành rỗng và ô nhập vào sẽ bị rỗng theo.
    this.newEn = '';
    this.newVn = '';
  }

}
