import { Component } from '@angular/core';

/*Nếu như tách service post thành 1 file riêng thì ở đây ko cần import những này nữa. Mà sẽ import file service đó.
-import ở trên, rồi gọi trong providers[]
-Hoặc nếu muốn tất cả đều use đc service này thì phải import trong app.module.ts và thêm vào providers[] của file đó.
  comp nào muốn sử dụng service đó thì chỉ cần import đường dẫn là đủ.
*/

// //import để có thể tương tác với http, để gửi request post lên http
// import { Http, Headers } from '@angular/http';
// // import 'rxjs/add/operator/toPromise';  //toPromise: trong angular6 đã tự động, ta ko cần import dòng này

import { SignIn3Service } from './sign-in3.service';



@Component({
  selector: 'app-sign-in3',
  templateUrl: './sign-in3.component.html',
  styleUrls: ['./sign-in3.component.css'],

  //Ở trên đã import rồi thì đây gọi class SignIn3Service vào trong Component, để sử dụng nó. 
  //Nếu muốn all comp đều sd đc thì phải import và gọi trong app.module.ts...  
  providers: [SignIn3Service]
})

export class SignIn3Component {

  //Cơ chế dependences Injection sẽ Inject service vào constructor như 1 đối tượng, nhưng ko cần khởi tạo.
  constructor(private signIn3Service: SignIn3Service) { }

  /*Bài 51: request dạng POST: đưa các giá trị input lên 1 url nào đó. Đó là đưa dl lên POST api, 
            còn việc lấy dl từ api về xử lý trong server ntn thì back-end xử lý.*/ 
  onSubmit(formSignIn){

    /*Đẩy input từ comp qua service thông qua gọi hàm truyền tham số vào, rồi service đẩy post request 
    lên server, server xử lý(backend) sau đó gửi response về */
    this.signIn3Service.sendPost(formSignIn.value)
    .then(result => console.log(result))
    .catch(err => console.log(err));


      // console.log(formSignIn.value);

      /*Gửi mọi giá trị input của form lên server. TƯƠNG TỰ PHẦN TEST TRONG HÀM postToExpress() BÊN DƯỚI.
      Comp thông qua lấy input từ form trong html thông qua tham số formSignIn trong hàm.
      Tại html #formSignIn đc gắn với "ngForm" trong html, để lấy mọi giá trị input của form trong html về. Sau đó nó gọi hàm onSubmit() nó đưa tham số vào onSubmit() và truyền
      qua comp. Sau đó tại hàm này comp lấy các input đó gởi nó lên server.

      Vì gửi cả object tất cả input của form lên server, nên bên server phải cài đặt là gửi object: qua xem bên index.js: res.send(req.body);
      */
    //  const url = 'http://localhost:3000/signin'; //3000 là do bên server ta quy định, signin cũng vậy
    //  const headers = new Headers({ 'Content-Type': 'application/json'}); //header là thuộc tính OPTION đc tạo ra giống như ta choose header khi sử dụng postman ở bài 50
    //  const body = JSON.stringify(formSignIn.value);//body là 1 chuỗi json. Ở đây sẽ đổi 1 javascript object thành json, rồi gửi lên object có thuộc tính name='Khoa Phạm'.
 
    //  //gọi phương thức để post lên
    //  this.http.post(url, body, { headers }) //post lên
 
    //  .toPromise()  //server sẽ trả về. ta chuyển đổi dl trả về từ server đó.
     
    //  .then(res => res.json()) //ở đây gửi nguyên object lên. nên .json chứ ko .text
    //  .then(resJSON => console.log(resJSON));


    
    /*Thay vì viết gộp chung request dạng post ở trong hàm onSubmit() thì ta tách nó ra thành 1 SERVICE riêng,
    copy hết qua bên file sign-in3.service.ts và chỉnh sửa lại thành return về, và ở đây sẽ gọi lấy dl trả về
    sau khi post request lên thành công.*/
    

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

