
//PIPE: lọc các phần tử trong mảng ra theo điều kiện

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any[], idFilter : string,  nameFilter : string, statusFilter : string ): any {
    // console.log(idFilter, nameFilter, statusFilter);
    // return products;

    /*
    -dạng undifine cho cả string và nhiều kdl khác boolean:
    nếu là boolean:   status: boolean thì (status)=true và (!status)=false

    nếu là kdl khác boolean thì là difine:có dl và undifine:null
    status: string thì (status)=difine=!null và (!status)=undifine=null
    */
    if(!idFilter && !nameFilter && !statusFilter){
      return products; //nếu chưa nhập vào gì hết thì ko cần lọc, trả về nguyên array products
    }else{
      //nếu string idfilter=define nghĩa là !=null, thì lọc mảng bằng hàm filter() có sẵn.
      //indexOf(id): trả về vị trí chuỗi id trong mảng/chuỗi 0->n-1, trả về vị -1 nếu ko tìm ra.
      
      //để dùng đc indexOf(idFilter) thì phải chuyển id của array element về kiểu string.
      //x là 1 phần tử trong mảng products, x.id: thì là id trong array cần phải toString(), 
      //còn indexOf(idFilter) là idFilter nhập vào để lọc, vd: id trong array là 1234 thì chỉ cần nhập vào idFilter=1 là nó đã hiện ra danh sách các id có '1' rồi.
      if(idFilter){
        products = products.filter(x => {
          //nếu != -1 thì return true; phần tử đó sẽ đc duyệt, lọc lên và đưa ra danh sách.
          return x.id.toString().indexOf(idFilter) != -1;
        });
      }


      //lọc name xong r, thì vẫn có thể lọc status nữa, nên ko dùng else if mà chỉ dùng if 
      //Nếu string namefilter=define nghĩa là !=null, thì lọc mảng bằng hàm filter() có sẵn.
      
      //Đối với chuỗi thì cần đưa về toàn bộ chữ thường, hoặc toàn chữ hoa để cùng loại mới so sánh đc.
      //  id ở trên cũng nhập vào chuỗi, nhưng ko cần tại vì id là nhập vào chuỗi SỐ.

      //ở đây name của element array đã là string rồi, nên ko dùng toString(), chỉ cần đưa về thường hoặc hoa là đc.
      if(nameFilter){
        products = products.filter(x => {
          //nếu != -1 thì return true; phần tử đó sẽ đc duyệt, lọc lên và đưa ra danh sách.
          return x.name.toLowerCase().indexOf(nameFilter.toLowerCase()) != -1;
        });
      }

      //Nếu string statusFilter=define nghĩa là !=null, thì lọc mảng bằng hàm filter() có sẵn.
      //statusFilter='true'/'false'/'all', nếu bằng 'true'/'false' thì nó lọc, 
      //  còn ='all' thì nó ko lọc mà sẽ lấy tất.

      //vì status trong array là boolean nên phải toString() để dùng đc indexOf()
      if(statusFilter){
        products = products.filter(x => {

          // console.log(x.status.toString().toLowerCase()); //trả về string 'true', 'false'

          //nếu != -1 thì return true; phần tử x đó sẽ đc duyệt, lọc lên và đưa ra danh sách.
          //nếu ==-1 thì return false; theo hàm filter() thì false sẽ ko đc duyệt và sẽ bị loại.
          // return x.status.toString().toLowerCase().indexOf(statusFilter.toLowerCase()) != -1; 

          //nếu statusFilter='all' thì return true: hàm filter() quy định true nghĩa là phần tử x đc duyệt và đưa vào danh sách.
          //  ko cần phải xét thêm điều kiện gì nữa, nên nếu statusFilter='all' thì mọi phần tử 
          //  trong products hiện tại sẽ được duyệt(products hiện tại là products đã lọc qua id,name).

          //ngược lại thì sẽ lọc theo true/false của x.status của array products.
          
          return statusFilter.toLowerCase() === 'all' ? true : x.status.toString().toLowerCase().indexOf(statusFilter.toLowerCase()) != -1; 
        });
      }

      return products;
    }

  }

}
