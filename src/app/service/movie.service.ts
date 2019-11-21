import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "../model/movie";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  urlMovies = "/assets/data/MOCK_DATA.json";

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get(this.urlMovies).pipe(map((resp: Movie[]) => resp));
  }

  searchMoviesByFilter(filter: string, items: Movie[]) {
    if (!items || !filter) {
      return items;
    }
    console.log(filter);
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(
      item => item.title.toLowerCase().indexOf(filter.toLowerCase()) > -1
    );
  }
}
