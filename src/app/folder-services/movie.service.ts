import { Injectable } from '@angular/core';

//class model  Movie
import { Movie } from './../folder-models/movie';


@Injectable(
  // {providedIn: 'root'}
)

export class MovieService {

  //tạo mảng chứa object
  public movies : Movie[] = [
    new Movie(1, 'Đêm định mệnh', 'https://www.youtube.com/watch?v=PIEbejHvDcI', 'Tuấn Hưng'),
    new Movie(2, 'Ngôi sao bay', 'https://www.youtube.com/watch?v=_jNZN-t2zE8', 'Đan Trường')
  ];

  constructor() { }

  getAllMovie(){
    return this.movies; 
  }

  addVideo(movie : Movie){
    movie.id = this.getLastID(this.movies); //last id của mảng hiện tại
    this.movies.push(movie);
  }

  getLastID(movies){
    /*toán tử 3 ngôi: 
    -nếu movies.length > 0 nghĩa là true thì trả về movies.sort()...: dùng sort() để sx mảng tăng dần theo id, 
    rồi trả về id của pt cuối cùng + 1 để làm id cho phần tử tiếp theo chuẩn bị đc push vào này.

    +Cú pháp: sort()[index].property : hàm sort() sx xong trả về mảng đã sx là mảng A chằng hạn: nên cú pháp đó chính là A[index].id hay A[index].name là chính xác.

    -nếu movies.length = 0 nghĩa là false, chưa có pt nào, nên thêm sẽ là thêm vào pt đầu tiên nên cho id đầu tiên là 1. 
    
    =>Tóm lại: sx tăng theo id để tìm ra id cuối cùng, rồi + 1 để thành id của phần tử cần thêm vào.
    */
    let lastID = movies.length > 0 ? 
    movies.sort((a, b) => {
      return a.id > b.id ? 1 : (a.id < b.id ? -1 : 0);
    })[movies.length-1].id + 1 : 1;

    return lastID;
  }


  //Xóa phần tử theo id: double click vào vào list thì sẽ xóa
  deleteVideo(id: number){
    const index = this.movies.findIndex(e => e.id === id);
    this.movies.splice(index, 1); //xóa từ phần thử thứ index, xóa 1 phần tử
  }

  //Update mảng theo id
  updateVideo(movie : Movie){
    const index = this.movies.findIndex(e => e.id === movie.id);
    this.movies.splice(index, 1, movie); 

    //SPLICE: tại vị trí index, xóa 1 phần tử, add phần tử movie vào lại vị trí index đó.

    //Xem rõ hơn về splice: vừa xóa vừa add: https://www.tutorialspoint.com/typescript/typescript_array_splice.htm
  }


}

