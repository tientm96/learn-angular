/*PIPE: sắp xếp array string (chuỗi): định dạng viết hoa các ký tự đầu của từ, KỂ CẢ ký tự có dấu như Đ, Ô, Â...
(pipe titlecase có sẵn: viết hoa ký tự đầu của chữ, nhưng nó KHÔNG định dạng đc các ký tự có dấu như Đ, Ô, Â...)
*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  /*Cắt từ: dùng hàm split() giúp cắt chuỗi dựa vào ký tự nào đó, ở đây cắt từ nên cắt dựa vào khoảng trắng ' '.
    cắt xong sẽ trả về mảng chứa các từ của chuỗi.

  */
  transform(value: any, args?: any): any {
    var arrStr = value.split(' '); //hàm split() cắt chuỗi dựa vào ký tự nào đó, ở đây là space ' '
    var result = '';


    /*Để viết hoa chữ đầu của từ:
    -dùng hàm split() cắt từng từ ra, trả về 1 mảng chứa các từ
    -forEach duyệt mỗi từ:
    +str.charAt(0): ký tự đầu tiên của từ (upperCase nó lên)
    +str.substr(1): cắt các ký tự từ vị trí ký tự 1 đến hết từ đó.
    
    =>cộng dồn 2 cái str.charAt(0).toUpperCase() + str.substr(1): sẽ ra đc 1 từ hoàn chỉnh có viết hoa ký tự đầu.

    +index !== arrStr.length - 1: xử lý dấu cách, nếu ko phải từ cuối cùng thì chèn dấu cách ' ' vào.
    */
    arrStr.forEach((str, index) => {
      // console.log(index);
      // console.log(arrStr.length);

      //kiểm tra kdl 2 thằng này đều là number, nên dùng được ===,!== (so sánh cùng kiểu dl). 
      // console.log(typeof index);
      // console.log(typeof arrStr.length);

      //Xem giải thích ở phần trên
      result += str.charAt(0).toUpperCase() + str.substr(1) + (index !== arrStr.length - 1 ? ' ' : '');
    });
 
    console.log(result);

    return result;
  }

}
