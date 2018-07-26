import { Component, OnInit } from "@angular/core";

import { LoggingService } from "../../folder-services/logging.service";
import { MovieService } from '../../folder-services/movie.service';

import { Movie } from '../../folder-models/movie';


@Component({
  selector: "app-movie-handle",
  templateUrl: "./movie-handle.component.html",
  styleUrls: ["./movie-handle.component.css"]
})
export class MovieHandleComponent implements OnInit {
  //Cơ chế Dependence Injection sẽ Inject service vào constructor, mà ko cần phải khởi tạo đối tượng.
  constructor(private loggingService: LoggingService, private movieService : MovieService) {}

  ngOnInit() {}

  onClick() {
    this.loggingService.logging();
  }

  addVideo(name : string, link : string, author : string){
    let movie = new Movie(null, name, link, author);
    this.movieService.addVideo(movie); //truyền dl movie muốn thêm vào servcie
  }
}
