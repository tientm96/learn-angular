import { WeatherComponent } from './weather.component';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise'; //trong angular 6 thì ko cần dòng này cũng có thể toPromise với get http.

//service lấy thời tiết thông qua api: Xem kỹ về service trong folder: ip2, ip.service.ts


@Injectable()

export class WeatherService {
    //kb biến http từ thư viện Http, angular sẽ tự động new ngầm cho nó thành đối tượng của Http. 
    constructor(private http: Http) { } 

    //hàm lấy nhiệt độ
    getTemp(cityName: string){
        //url lấy từ api trang https://openweathermap.org/ . Xem trong file NOTE.txt.
        //qua api này, có thể lấy đc thông tin thời tiết của thành phố thông qua tên thành phố truyền vào.
        const url = 'https://api.openweathermap.org/data/2.5/weather?appid=e490064ea5c52b53fb81809ab6a3059f&units=metric&q=' + cityName;

        return this.http.get(url)
        .toPromise() 
        .then(res => res.json())
        .then(resJson => resJson.main.temp) //theo url thì cấu trúc json chứa weather là main bọc bên ngoài temp 
    }

}