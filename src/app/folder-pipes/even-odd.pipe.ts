import { Pipe, PipeTransform } from '@angular/core';
import { forEach } from '../../../node_modules/@angular/router/src/utils/collection';

@Pipe({
  name: 'evenOdd'
})
export class EvenOddPipe implements PipeTransform {

  transform(arrNumber: number[], evenValue: number): any {
    // var result : number[]; //mảng tĩnh, ko thể dùng push đc, 
    var result = new Array(); //mảng động, dùng push đc.

    //vào đây để xem các hàm của array trong typescript: 
    //https://www.tutorialspoint.com/typescript/typescript_arrays.htm

    //hàm push() thêm phần tử về cuối mảng, trả về length mới.

    if (evenValue === 1) {
      arrNumber.forEach((item, index) => {
        item % 2 === 0 ? result.push(item) : -1; //nếu true thì trả về length mới, false thì -1 hay số nào cũng đc, cho có ngôi là đc. 
      });
    }else{
      arrNumber.forEach((item, index) => {
        item % 2 !== 0 ? result.push(item) : -1; //nếu true thì trả về length mới, false thì -1 hay số nào cũng đc, cho có ngôi là đc. 
      });
    }

    return result;
  }

}
