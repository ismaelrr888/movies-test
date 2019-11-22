import { Injectable } from "@angular/core";
import { Movie } from "../model/movie";
import { BehaviorSubject, Observable } from "rxjs";
import { MovieCart } from '../model/movie-cart';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: "root"
})
export class CartService {
  cartMovies: MovieCart[];

  constructor() { }

  addMovies(movie: Movie, quantity: number = 1) {
    const pos = this.getPos(movie);
    if (pos > -1) {
      this.cartMovies[pos].quantity += quantity;
      this.cartMovies[pos].total = this.cartMovies[pos].getTotalPrice();
    } else {
      this.cartMovies.push(new MovieCart(movie, quantity, movie.price * quantity));
    }
    console.log(this.cartMovies);
  }

  getPos(movie: Movie): number {
    if (isNullOrUndefined(this.cartMovies)) {
      this.cartMovies = [];
    }
    return this.cartMovies.findIndex((m) => m.movie.id === movie.id);
  }

  getCartMovies(): MovieCart[] {
    return this.cartMovies;
  }
}
