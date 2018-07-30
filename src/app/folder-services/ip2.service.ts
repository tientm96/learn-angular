import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/toPromise'; //trong angular 6 thì ko cần dòng này cũng có thể toPromise với get http.

@Injectable()


/*Tạo file này chứa service:
-import:  Injectable từ core, Http từ http.
-Nếu là angular4 thì phải import 'rxjs/add/operator/toPromise': Để sử dụng toPromise(), còn angular đã tự động có ko cần import.

-Vì đây là service nên gọi @Injectable() để nó thực thi service, giống component thì gọi @Component(){}

-Xuống dưới phần soạn service: class IpService: Để làm việc với service.
hàm getIp sẽ return về ip lấy từ server thông qua service.

*/ 


export class Ip2Service {

    constructor(private http: Http) { } //kb biến http từ thư viện Http, angular sẽ tự động new ngầm cho nó thành đối tượng của Http. 

    //Lấy service ra. Ở đây là trả về ip nên nhớ có return.
    getIp(){
        return this.http.get('http://ip.jsontest.com/') //lấy dl từ server này về, trả dl về kiểu Observable
        .toPromise() //để chuyển dl sang dạng Promise. Để có toPromise() thì phải import ở trên cùng (Với Angular6 thì ko cần import nữa).
        .then(res => res.json()) //then sẽ nhận gtri trả về, chuyển promise sang kiểu json.
        .then(resJson => resJson.ip) //trả về ip của json, ip lấy từ service. (đúng với tên gọi getIp() của function này)

        //Ở đây then: nhận giá trị trả về, và catch phóng ngoại lệ.
    }
}