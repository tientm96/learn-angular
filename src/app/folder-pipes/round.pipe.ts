import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'roundNum' })

/***Tạo ra 1 pipe: -vd: tạo 1 pipe làm tròn lên.
-Tạo 1 file round.pipe.ts trống: file này chứa pipe làm tròn cần tạo.
-import Pipe và PipeTransform từ core.
-đặt tên pipe, ở đây đặt roundNum, gọi trong html với tên pipe này là roundNum.
-implement method transform và chỉnh sửa kdl đưa vào, kdl đưa ra của nó.
(đưa vào 1.9, sau khi làm tròn đưa ra 2.0: nên đều là number)

-Cấu hình file pipe này vào trong app.modules.ts: import đường dẫn + gọi trong hàm declarations, 
giống như cấu hình 1 component bình thường.


-CHÚ Ý: nếu dùng lệnh để tạo 1 folder chứa các file name.pipe.ts riêng thì dùng như comp thôi:
+tạo comp: ng g c compname
+tạo pipe: ng g p my-new-pipe
(xem hình pipe-các lệnh trong hình trong image note. Hoặc tại: https://www.npmjs.com/package/@angular/cli )

*/

export class RoundPipe implements PipeTransform {
    transform(value: number, isUpper: boolean, addTo: number): number {  
        // bên trong (value): đưa vào kiểu number;
        // bên ngoài ngoặc () có :number: trả ra kết quả sau khi pipe cũng kiểu number.
        // thêm tham số  isUpper để nhận tham số truyền vào từ bên ngoài.
        //  addTo cũng là 1 tham số nhận truyền vào từ html.

        // if(isUpper){
        //     return Math.ceil(value + addTo); //nếu isUpper=true thì làm tròn lên
        // }
        // return Math.floor(value + addTo); //nếu isUpper=false thì làm tròn xuống

        //Dùng toán tử 3 ngôi
        //addTo đơn giản chỉ là 1 tham số truyền vào từ html: vd addTo=10, value=1.5 thì sẽ làm tròn cho (11.5)
        return isUpper ? Math.ceil(value + addTo) : Math.floor(value + addTo);

        // return Math.round(value); //hàm làm tròn theo toán học thông thường.
    }
}
