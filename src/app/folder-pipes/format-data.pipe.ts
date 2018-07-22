
//PIPE: Lấy 1 đoạn văn bản + ...: nếu văn bản dài quá, mà muốn hiển thị lên thì ta chỉ lấy 1 đoạn thôirồi + thêm dấu ...

import { Pipe, PipeTransform } from '@angular/core';

//pipename formatData sẽ đc gọi trong html để gọi ra tính chất của pipe.
@Pipe({
  name: 'formatData'
})

//pipe này dùng để cắt chuỗi, tương tự pipe slice có sẵn.
export class FormatDataPipe implements PipeTransform {

  //any nghĩa là kiểu dl bất kỳ nào đó, thường là dùng cho object
  //kiểu any trong () là kiểu value nhận vào, any bên ngoài là kiểu value trả ra. 
  transform(value: any, args?: any): any {
    // console.log(typeof args); //để xem args là kiểu dl gì

    return value.substr(0, 10) + '...'; //cắt từ vị trí 0 đến 10-1
  }

}
