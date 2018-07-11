import { Component } from '@angular/core';

@Component({
    //vào https://angular.io/api/ tại ô Filter search tìm Component, chọn @Component sẽ ra link https://angular.io/api/core/Component
    //Theo đó, styles: là mảng nên phải [].
    //Vào đó xem định dạng để làm cho đúng theo từng cái.

    // template: '<h3>this is world component</h3>',
    templateUrl: './word.component.html', //Dạng string bt. File Url thì gọi đường dẫn chứ ko chèn trực tiếp.
    selector: 'app-world', //tạo tên thẻ của component khi gọi trong file app.component.html: <app-world></app-world>
    
    // để chuỗi được xuống nhiều dòng thì đặt chuỗi trong `` (trên phím Tab)
    
    // styles: [`  
    //     h3 {
    //         color: red;
    //     }
    // `]

    styleUrls: ['./word.component.css'], //Dạng mảng. file Url thì gọi link, chứ ko chèn trực tiếp.
})

export class WorldComponent {
    en: string = 'Hello'; //tạo biến, bên html gọi bằng cách {{en}}
    vn = 'Xin chào';    //type script tự hiểu kdl, có string hay ko đều đc.

    imageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'; //tạo biến imageUrl

    forgot = false; //tạo biến forgot
}  
