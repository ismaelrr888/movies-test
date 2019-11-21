import { Injectable } from "@angular/core";
import { Movie } from "../model/movie";

@Injectable({
  providedIn: "root"
})
export class CartService {
  movies: Movie[];

  constructor() {}

  addMovies(movie: Movie) {
    this.movies.push(movie);
  }
}
