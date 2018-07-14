import { Component, OnInit } from '@angular/core';

//import để sử dụng service trong weather.service.ts: Xem ip2.component.ts có giải thích rõ
//import ở đây vào gọi ra trong providers[]
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],

  //gọi service vào comp
  providers: [WeatherService]
})

export class WeatherComponent implements OnInit {

  txtCityName=''; // bên html dùng ngModel để gắn với biến này. Nhập vào là nó tự nhận dl.
  cityName = '';
  temp= null; //nhiệt độ, lúc đầu chưa có nhiệt độ nên cho null

  //khởi tạo ngầm object của service cần gọi
  constructor(private weatherService: WeatherService) { }

  //test thử service get weather
  // ngOnInit() {
  //   this.weatherService.getTemp('Tokyo') //gọi hàm getTemp của service, truyền tham số vào.
  //   .then(temp => console.log(temp))
  //   .catch(err => console.log(err));
  // }

  ngOnInit(){
  }

  getWeather(){
    this.weatherService.getTemp(this.txtCityName) //gọi hàm getTemp của service, truyền tham số vào.
    .then(temp => {
      this.cityName = this.txtCityName; //gán lại tên thành phố hiển thị ra = tên tp tìm kiếm
      this.temp = temp; //gán biến nhiệt độ = nhiệt độ tìm đc
    })
    .catch(err => console.log(err));
  }

}
