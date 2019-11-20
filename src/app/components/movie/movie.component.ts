import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/model/movie";
import { MovieService } from "../../service";

@Component({
  selector: "movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  searchKeyword: string;
  movies: Movie[];

  constructor(private _movieService: MovieService) {}

  ngOnInit() {
    this._movieService.getMovies().subscribe(response => {
      this.movies = response;
    });
  }

  setValueKeyWord(event) {
    this.searchKeyword = event;
  }
}
