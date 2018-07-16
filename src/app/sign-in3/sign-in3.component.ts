import { Component, OnInit } from '@angular/core';

//import để có thể tương tác với http, để gửi request post lên http
import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/toPromise';  //toPromise: trong angular6 đã tự động, ta ko cần import dòng này



@Component({
  selector: 'app-sign-in3',
  templateUrl: './sign-in3.component.html',
  styleUrls: ['./sign-in3.component.css']
})

export class SignIn3Component implements OnInit {

  //khởi tạo biến http từ kdl Http. Angular sẽ ngầm new, nên biến http là object.
  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(formSignIn){
      // console.log(formSignIn.value);

      /*Gửi mọi giá trị input của form lên server. TƯƠNG TỰ PHẦN TEST TRONG HÀM postToExpress() BÊN DƯỚI.
      Comp thông qua lấy input từ form trong html thông qua tham số formSignIn trong hàm.
      Tại html #formSignIn đc gắn với "ngForm" trong html, để lấy mọi giá trị input của form trong html về. Sau đó nó gọi hàm onSubmit() nó đưa tham số vào onSubmit() và truyền
      qua comp. Sau đó tại hàm này comp lấy các input đó gởi nó lên server.

      Vì gửi cả object tất cả input của form lên server, nên bên server phải cài đặt là gửi object: qua xem bên index.js: res.send(req.body);
      */
     const url = 'http://localhost:3000/signin'; //3000 là do bên server ta quy định, signin cũng vậy
     const headers = new Headers({ 'Content-Type': 'application/json'}); //header là thuộc tính OPTION đc tạo ra giống như ta choose header khi sử dụng postman ở bài 50
     const body = JSON.stringify(formSignIn.value);//body là 1 chuỗi json. Ở đây sẽ đổi 1 javascript object thành json, rồi gửi lên object có thuộc tính name='Khoa Phạm'.
 
     //gọi phương thức để post lên
     this.http.post(url, body, { headers }) //post lên
 
     .toPromise()  //server sẽ trả về. ta chuyển đổi dl trả về từ server đó.
     
     .then(res => res.json()) //ở đây gửi nguyên object lên. nên .json chứ ko .text
     .then(resJSON => console.log(resJSON));

  }


  //TEST THỬ VIỆC GỬI 1 ĐOẠN TEXT LÊN SERVER. bên html bấm btn POST sẽ gọi hàm này, muốn dùng hàm này thì
  //  bên index.js sẽ res.send(req.body.name); gửi lên name là 1 text string bình thường, chứ ko phải object nên có .name nữa.
  postToExpress(){
    // //vì ở server trong file index.js, ta handel post ở raw là signin, nên url ở đây là signin
    // const url = 'http://localhost:3000/signin'; //3000 là do bên server ta quy định, signin cũng vậy
    // const headers = new Headers({ 'Content-Type': 'application/json'}); //header là thuộc tính OPTION đc tạo ra giống như ta choose header khi sử dụng postman ở bài 50
    // const body = JSON.stringify({ name: 'Khoa Phạm' });//body là 1 chuỗi json. Ở đây sẽ đổi 1 javascript object thành json, rồi gửi lên object có thuộc tính name='Khoa Phạm'.

    // //gọi phương thức để post lên
    // this.http.post(url, body, { headers }) //post lên

    // .toPromise()  //server sẽ trả về. ta chuyển đổi dl trả về từ server đó.
    
    // .then(res => res.text()) //vì bên index.js trong server: gửi lên server bằng dòng res.send(req.body.name): name chỉ là 1 cái text string bt, nên chỉ cần res.text().
    //                         //còn nếu res.send(req.body) là cả đối tượng, nên ở đây res.json()

    // .then(resText => console.log(resText));
    
  }

}

