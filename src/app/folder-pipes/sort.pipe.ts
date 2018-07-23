import { Pipe, PipeTransform } from '@angular/core';

//NHỚ VÀO NOTE BÀI 73 ĐỂ XEM CHI TIẾT VỀ LODASH: https://lodash.com/docs/4.17.10#orderBy
//lodash là thư viện hỗ trợ các tiện ích cho pipe: Vào note bài 73 để xem chi tiết, ở đây ta vận dụng lodash vào sắp xếp.

/*Lodash: CÁCH 1
terminal trong prj: npm install lodash --save và gọi nó ra bằng lệnh import bên dưới.
-cách 1: là import tất cả các hàm của lodash, nên phải sd _.tên_hàm() để gọi hàm; và phải khai báo cho _
import 'lodash';
declare var _; //để sử dụng đc cấu trúc hàm _.tên_hàm() của lodash thì phải khai báo _ cho js
=>Xong r xuống dưới gọi tên hàm ra sd: _.tên_hàm() vd: _.orderBy()
*/
// import 'lodash';
// declare var _; 


/*Cách 2 của LODASH: terminal trong prj: npm install @types/lodash --save
-cách 1: là import tất cả các hàm của lodash, nên phải sd _.tên_hàm() để gọi hàm; và phải khai báo cho _
-cách 2: sd hàm nào import hàm đó  thôi, vậy nên có thể gọi trực tiếp tên_hàm() mà ko cần _.
nên ko cần khai báo declare var _;

chỉ cần: import { orderBy } from 'lodash'; 
=>xong rồi xuống dưới gọi tên hàm ra sd: tên hàm ko cần dấu _: tên_hàm() vd: orderBy() 

CÁCH 2 DÙNG GIÚP LÀM NHẸ PRJ HƠN, TĂNG PERFORMANCE HƠN.
*/
import { orderBy } from 'lodash';


@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: any[], sortBy : string, sortValue: number): any {

    /*Ban đầu mới render lên thì sortBy='name' và sortValue=1 đã là mặc định.
    Vì sortValue=1  nên sẽ theo cấu trúc: a>b trả 1, a<b trả -1, a===b trả 0: là cấu trúc sx tăng dần của hàm sort();
    =>vậy nên ban đầu khi mới vừa render lên thì đã sx tăng dần theo name.
 
    -Lần click đầu tiên Name/Price: Khi kích vào tiêu đề nào đó thì nó sẽ làm thay đổi sortValue=-sortValue=-1, 
    lúc này sẽ theo cấu trúc: a>b trả -1, a<b trả 1, a===b trả 0: là cấu trúc sx giảm dần của hàm sort();
    =>vậy nên lần click lần đầu tiên bất cứ cái nào thì cũng sẽ chuyển sang sx giảm dần.
    */
   
    if(sortBy === 'name'){
      // nếu =name thì ta sx theo name.
      // products.sort((a, b) =>{
      //   return a.name > b.name ? sortValue : (a.name < b.name ? -sortValue : 0);
      // });
      
      //Sử dụng lodash để sx orderBy thay vì tự làm như trên: vào note bài 73 để xem giải thích.

      // Cách 1 của lodash:
      // products = _.orderBy(products, ['name'], [sortValue === 1 ? 'asc' : 'desc']);
 
      //Cách 2 của lodash: vì import trực tiếp nên ko cần gọi hàm bằng dấu _.
      products = orderBy(products, ['name'], [sortValue === 1 ? 'asc' : 'desc']);

      /*nếu sortValue===1 thì sx name theo tăng dần (asc), và nếu sortValue !==1 thì sx name theo giảm dần (desc).
      sortValue: là giá trị nhận vào 1/-1 nếu ta kích sx tăng hay giảm...*/
    }

    if(sortBy === 'price'){
      // nếu =price thì ta sx theo price.
      // products.sort((a, b) =>{
      //   return a.price > b.price ? sortValue : (a.price < b.price ? -sortValue : 0);
      // });

      //Sử dụng lodash để sx orderBy thay vì tự làm như trên: vào note bài 73 để xem giải thích.
     
      // Cách 1 của lodash:
      // products = _.orderBy(products, ['price'], [sortValue === 1 ? 'asc' : 'desc']);

      //Cách 2 của lodash: vì import trực tiếp nên ko cần gọi hàm bằng dấu _.
      products = orderBy(products, ['price'], [sortValue === 1 ? 'asc' : 'desc']);

      /*nếu sortValue===1 thì sx price theo tăng dần (asc), và nếu sortValue !==1 thì sx price theo giảm dần (desc)
      sortValue: là giá trị nhận vào 1/-1 nếu ta kích sx tăng hay giảm...*/
    }

    return products;
  }

}
