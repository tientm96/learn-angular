import { Component, OnInit } from '@angular/core';

//import để sử dụng service trong weather.service.ts: Xem ip2.component.ts có giải thích rõ
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],

  //gọi service vào comp
  providers: [WeatherService]
})

export class WeatherComponent implements OnInit {

  //khởi tạo ngầm object của service cần gọi
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getTemp('Tokyo') //gọi hàm getTemp của service, truyền tham số vào.
    .then(temp => console.log(temp))
    .catch(err => console.log(err));
  }

}
