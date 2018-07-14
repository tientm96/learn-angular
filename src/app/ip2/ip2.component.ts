import { Component } from '@angular/core';
import { IpService } from './ip.service';

@Component({
  selector: 'app-ip2',
  templateUrl: './ip2.component.html',
  styleUrls: ['./ip2.component.css'],

  providers: [IpService] //Ở trên đã import rồi thì đây gọi file ip.service.ts vào trong Component, để sử dụng nó. 
})

/*Xem trước bài 35 trong folder ip: ip.component.ts
----------------------
Bài 36: Cách 2: Viết riêng service, để comp tập trung vào việc điều khiển các view. Viết riêng còn thuận lợi cho việc testing.
Tạo folder ip2.component.ts để thực hiện get service tách riêng.

-Tạo file ip.service.ts: file này chứa service: qua file đó để xem giải thích chi tiết.
-Vì dùng đến file ip.service.ts nên import nó vào.

-trong @component: thêm vào mảng providers để chứa các file import qua để sử dụng nó trong comp này,
ở đây nó chứa file IpService.

-Trong class comp: 


*/
export class Ip2Component {

  ip: String;

  //ngay trong consturtor, ta nhận ip trả về. Chỉ nhận nên ko cần return.

  constructor(private ipService: IpService) { //biến: kdl, ở đây là kb biến ipService
    this.ipService.getIp()  //gọi tới hàm getIp(), hàm này trả về ip.
    .then(ip => this.ip = ip) //then: sẽ nhận ip trả về đó.
    .catch(err => console.log(err));
  }

}
