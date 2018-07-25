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
  cityName = ''; // biến thành phố hiển thị ra = tên tp tìm kiếm
  temp= null; //nhiệt độ, lúc đầu chưa có nhiệt độ nên cho null
  isLoading= false;//thuộc tính hiển thị đang loading..., mới đầu chưa load gì cả nên false.

  //khởi tạo ngầm object của service cần gọi
  //Cơ chế Dependence Injection sẽ Inject service vào constructor, mà ko cần phải khởi tạo đối tượng.
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
    //khi vừa bắt đầu get thì cho hiện trạng thái loading... lên.
    this.isLoading = true;

    this.weatherService.getTemp(this.txtCityName) //gọi hàm getTemp của service, truyền tham số vào.
    .then(temp => {
      this.cityName = this.txtCityName; //gán lại tên thành phố hiển thị ra = tên tp tìm kiếm
      this.temp = temp; //gán biến nhiệt độ = nhiệt độ tìm đc
      
      //khi lấy dữ liệu xong r, bỏ hiển thị trạng thái loading...; và gán lại ô nhập thành rỗng.
      this.isLoading = false;
      this.txtCityName = ''; //gán rỗng lại cho ô nhập thành phố vào
    })
    // .catch(err => console.log(err)); //in lỗi ra console.
    .catch(err => {
      alert('Cannot find your city!'); //hiển thị thông báo lỗi, nhấn ok
      this.isLoading = false; //sau khi nhấn ok thì bỏ tráng thái đang loading...
      this.cityName = ''; //gán lại = rỗng, để chỗ hiển thị thành phố lại hiện "Enter your city name"
      this.txtCityName = ''; //gán rỗng lại cho ô nhập thành phố vào
    });
  }

  //getmessage() hàm show dữ liệu ra cho người dùng. Thay vì viết trong html dài dòng thì ta viết ở đây r gọi qua html.
  //nếu đang lấy dl thì hiển thị loading...
  getMessage(){
    if(this.isLoading){
      return 'Loading...';
    }
    return this.cityName === '' ? 'Enter your city name' : (this.cityName + ' is now ' + this.temp);
  }

}
