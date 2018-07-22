
//PIPE: sắp xếp array number

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(arrNumber: number[], sortValue: number): any {
    // console.log(typeof args); //để xem args là kiểu dl gì
    
    /*CHÚ Ý:
    Ta sắp xếp trực tiếp trên mảng, nhưng giá trị trả về lại ko gắn vào mảng, mà phải tạo ra 1 biến
    var result để lưu giá trị sau khi sắp xếp.

    Sx xong trả về mảng mới thông qua kết quả var result: return [...result];
    Cú pháp [...result] là tạo 1 array[] mới, rồi copy result vào array mới đó.
    */ 

    /*dùn hàm sort() có sẵn để sx, cơ chế của hàm sort: 
    nếu sắp xếp tăng dần thì: a > b trả về 1, a < b trả về -1, a = b trả về 0,
    nếu sắp xếp giảm dần thì: a > b trả về -1, a < b trả về 1, a = b trả về 0.
    Mình chỉ cần đưa đk vào như v, sort() nó tự sx.
   
    Ta dùng param sortValue để đưa giá trị 1/-1 vào để sx tăng dần/giảm dần theo ý muốn.
      nếu param sortValue=1 thì hàm sort() sẽ có cơ chế sx tăng dần, và ngược lại.
    */
    var result = arrNumber.sort((a, b) => {
      return a > b ? sortValue : (a < b ? -sortValue : 0);
    });


    /*Cách 2: Ban đầu sx cứng là tăng dần, sau giảm dần thì chỉ cần đảo mảng lại.
    Dùng hàm  reverse() để đảo mảng.*/ 
   
    // var result = arrNumber.sort((a, b) => {
    //   return a > b ? 1 : (a < b ? -1 : 0);
    // });

    // if(sortValue === -1){
    //   result = result.reverse();
    // }

    //trả về 1 mảng mới, copy từ mảng result, xem giải thích trên phần CHÚ Ý ở trên.
    return [...result];
  }

}
