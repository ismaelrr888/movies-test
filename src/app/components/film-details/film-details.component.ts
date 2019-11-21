import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { MovieService } from "src/app/service";
import { Movie } from "src/app/model/movie";
import { Observable } from "rxjs";

@Component({
  selector: "film-details",
  templateUrl: "./film-details.component.html",
  styleUrls: ["./film-details.component.scss"]
})
export class FilmDetailsComponent implements OnInit {
  movie: Observable<Movie>;
  movies: any[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _movieService: MovieService
  ) {}

  ngOnInit() {
    this._route.data.subscribe((data: { movies: Movie[] }) => {
      this._movieService.movies = data.movies;
    });
    this.movie = this._route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this._movieService.getMovieById(params.get("id"))
      )
    );
  }

  backToList() {
    this._router.navigate(["/movies"]);
  }
}
