import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service';
import { Movie } from 'src/app/model/movie';
import { MovieCart } from 'src/app/model/movie-cart';

@Component({
  selector: 'tma-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  movies: MovieCart[];

  constructor(private _cartService: CartService) { }

  ngOnInit() {
    this.movies = this._cartService.getCartMovies();
  }

}
