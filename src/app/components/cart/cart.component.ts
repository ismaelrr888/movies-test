import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'tma-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  movies: Movie[];

  constructor(private _cartService: CartService) { }

  ngOnInit() {
    this.movies = this._cartService.getMovies();
    console.log(this.movies);
  }

}
