/* Xem giải thích và cấu hình service ntn trong foldr ip2, có file ip.service.ts

-Ở file ip.service.ts thì là get, nên ko import Headers.
Còn ở đây là post nên có import thêm Headers.

-Giống với get:
+trong comp: import Http; import toPromise (angular 6 thì ko cần)
+trong app.module.ts nhớ import HttpModule và gọi xuống imports: [] (đã import trước ở phần get r thì thôi)
+trong class của comp: khai báo đối tượng http để post dl lên. angular sẽ tự động new ngầm cho đối tượng http đó.

-Có các cái mới so với GET:
+có headers đc tọa ra từ class Headers, class này đc lấy từ thư viện @angular/http
+với phương thức post() ta truyền các loại: url, body là chuỗi json, và biến header đã tạo ở trên.
sau đó thì cũng toPromise và xử lý dữ liệu để post lên.

*/ 

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
//import 'rxjs/add/operator/toPromise'; //trong angular 6 thì ko cần dòng này cũng có thể toPromise với get http.

@Injectable()

export class SignIn3Service {

    constructor(private http: Http) { } //kb biến http từ thư viện Http, angular sẽ tự động new ngầm cho nó thành đối tượng của Http. 

    //đưa request post lên server, sau đó nhận response trả về, nên sẽ có return.
    //Service sẽ nhận trả về, sau đó truyền qua comp bằng cách comp gọi service.
    sendPost(value){
        const url = 'http://localhost:3000/signin'; //3000 là do bên server ta quy định, signin cũng vậy
        const headers = new Headers({ 'Content-Type': 'application/json'}); //header là thuộc tính OPTION đc tạo ra giống như ta choose header khi sử dụng postman ở bài 50
        // const body = JSON.stringify(formSignIn.value);//body là 1 chuỗi json. Ở đây sẽ đổi 1 javascript object thành json, rồi gửi lên object có thuộc tính name='Khoa Phạm'.
        //thay vì formSignIn.value, thì ở đây nó nhận tham số value truyền vào là input từ comp khi comp gọi hàm này để post lên.
        const body = JSON.stringify(value);

        //gọi phương thức để post lên, và return về giá trị đc response về.
        return this.http.post(url, body, { headers }) //post lên
            .toPromise()  //server sẽ trả response về. ta chuyển đổi dl trả về từ server đó.
            .then(res => res.json()) //ở đây gửi nguyên object lên. nên .json chứ ko .text

            //Để qua bên comp nhận dl rồi mới log ra, ở đây chỉ nhiệm vụ lấy dl thôi.
            // .then(resJSON => console.log(resJSON));
    }
}