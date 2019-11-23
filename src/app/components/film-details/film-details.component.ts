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
  movie: any;
  movies: any[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _movieService: MovieService
  ) { }

  ngOnInit() {
    let id = this._route.snapshot.paramMap.get('id');
    this._movieService.getMovies().subscribe(response => {
      this.movies = response;
      this.movie = this.movies.find(resp => resp.id === id);
    });
  }

  backToList() {
    this._router.navigate(["/movies"]);
  }
}
