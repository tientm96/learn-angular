import { Component, OnInit } from '@angular/core';
import { Ip2Service } from '../../folder-services/ip2.service'; //IpService: là class bên trong ip.service.ts

@Component({
  selector: 'app-ip2',
  templateUrl: './ip2.component.html',
  styleUrls: ['./ip2.component.css'],

  //Ở trên đã import rồi thì đây gọi file ip.service.ts vào trong Component, để sử dụng nó. 
  // providers: [IpService]  

  /* thuộc tính providers: là mảng chứa các file đc import. Ở đây là ip.service.ts.
  -Nếu ta gọi providers ở đây: thì chỉ một comp ip2.comp.ts này sử dụng đc service trong file ip.service.ts
  (các comp khác muốn sd nó cũng phải làm tương tự)

  -Nhưng nếu ta gọi khai báo trong tệp khai báo chung: trong app.module.ts, thì mọi comp đều sử dụng đc 
  service trong ip.service.ts đó. (các comp khác muốn sd thì chỉ cần import nó là đủ).

  +vào trong app.module.ts: import { IpService } from './ip2/ip.service';
  +cũng tại app.module.ts: kéo xuống gọi IpService vào trong providers là xong: providers: [IpService]
  */
})

/*Xem trước bài 35 trong folder ip: ip.component.ts
----------------------
Bài 36: Cách 2: Viết riêng service, để comp tập trung vào việc điều khiển các view. Viết riêng còn thuận lợi cho việc testing.
Tạo folder ip2.component.ts để thực hiện get service tách riêng.

-Tạo file ip.service.ts: file này chứa service: qua file đó để xem giải thích chi tiết.
-Vì dùng đến file ip.service.ts nên import nó vào.

-trong @component: thêm vào mảng providers để chứa các file import qua để sử dụng nó trong comp này,
ở đây nó chứa file IpService.

-Trong class comp: nhận ip trả về.
*/
export class Ip2Component implements OnInit {
  
  ip: String;

  //biến: kdl, ở đây là kb biến ipService
  //Cơ chế Dependence Injection sẽ Inject service vào constructor, mà ko cần phải khởi tạo đối tượng.
  constructor(private ipService: Ip2Service) { 
    // this.ipService.getIp()  
    // .then(ip => this.ip = ip) 
    // .catch(err => console.log(err));
  }

  //Xem phần dưới sẽ giải thích tại sao dùng ngOnInit() để gán ip, thay cho dùng trong hàm tạo.
  ngOnInit(): void {
    this.ipService.getIp()  //gọi tới hàm getIp(), hàm này lấy ip từ server về, rồi xử lý kiểu dl, rồi trả về ip.
    .then(ip => this.ip = ip) //then: sẽ nhận ip trả về đó.
    .catch(err => console.log(err));
  }

  /*hàm ngOnInit(): là hàm chạy ngay sau khi constructor đc khởi tạo, là thời điểm thích hợp để lấy 
  dl trên server hoặc lấy dl các thuộc tính comp. (luôn đặt bên dưới hàm tạo)

  Muốn dùng phải import OnInit từ core, rồi override lại hàm ngOnInit() theo ý muốn.
  (bt khi a-component để tạo comp thì đã có  sẵn ngOnInit() rồi.)

  -Vậy nên ở đây ta ko lấy ip (từ IpService-ip.service.ts) ở trong hàm tạo nữa, mà đưa vào hàm ngOnInit() để lấy ip. 
  Hàm tạo chỉ cần khởi tạo đối tượng của IpService là đc.
  */ 
}
