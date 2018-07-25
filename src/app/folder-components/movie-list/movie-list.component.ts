import { Component, OnInit } from "@angular/core";
import { MovieService } from './../../folder-services/movie.service';
import { Movie } from './../../folder-models/movie';



@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  
  public movies : Movie[] = [];

  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.movies =  this.movieService.getAllMovie();
    console.log(this.movies);
  }

  //hàm xóa nếu double click vào hàng đó: double click sẽ gửi id về đây, rồi hàm này sẽ gửi id qua service để xóa
  deleteVideo(id: number){
    // console.log(id);
    this.movieService.deleteVideo(id);
  }


  //UPDATE
  //kích đơn 1 lần sẽ hiện ra khung để update
  isCheckUpdate = false;
  id: number;
  name: string='';
  link: string='';
  author: string='';

  //xử lý hiện lên khung update và binding dl ra ô input
  //Nhận các name cũ gửi về thông qua ngFor
  enableUpdateVideo(id: number, name: string, link: string, author: string){
    this.isCheckUpdate =  !this.isCheckUpdate; //khung hiện lên
    //các giá trị nhận về
    this.id = id;
    this.name = name;
    this.link = link;
    this.author = author;
    // console.log(id, name, link, author,  this.isCheckUpdate);
  }


  //xử lý update
  //Nhận các name mới gửi về, thông qua #nameRef là template reference variable
  handleUpdateVideo(name: string, link: string, author: string){
    let movie = new Movie(this.id, name, link, author);
    this.movieService.updateVideo(movie);

    //update xong thì tắt form đi và remove id lại
    this.isCheckUpdate = false;
    this.id = null;
  }

}
