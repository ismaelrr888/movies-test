import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Resolve
} from "@angular/router";
import { Observable } from "rxjs";
import { Movie } from "../model/movie";
import { MovieService } from "../service";

@Injectable({
  providedIn: "root"
})
export class DetailsFilmGuard implements Resolve<Movie[]> {
  constructor(private movieServices: MovieService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Movie[] | Observable<Movie[]> | Promise<Movie[]> {
    return this.movieServices.getMovies();
  }
}
