import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/model/movie";
import { MovieService } from "../../service";

@Component({
  selector: "tma-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  movies: Movie[];

  constructor(private _movieService: MovieService) {}

  ngOnInit() {
    this._movieService
      .getMovies()
      .subscribe(response => (this.movies = response));
  }
}
