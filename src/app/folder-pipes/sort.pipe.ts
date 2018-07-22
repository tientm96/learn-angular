import { Pipe, PipeTransform } from '@angular/core';

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
      products.sort((a, b) =>{
        return a.name > b.name ? sortValue : (a.name < b.name ? -sortValue : 0);
      });
    }

    if(sortBy === 'price'){
      // nếu =price thì ta sx theo price.
      products.sort((a, b) =>{
        return a.price > b.price ? sortValue : (a.price < b.price ? -sortValue : 0);
      });
    }

    return products;
  }

}
