import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service';
import { MovieCart } from 'src/app/model/movie-cart';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartMovies: MovieCart[];
  form: FormGroup;
  totalPrice = 0;

  constructor(private _cartService: CartService, private _fb: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.cartMovies = this._cartService.getCartMovies();
    this.form = this._fb.group({
      qty: this._fb.control(null)
    });
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = 0;
    if (this.cartMovies) {
      this.cartMovies.forEach(item => this.totalPrice += item.total);
    }
  }

  updateCartMovie(cartMovie: MovieCart, qty: any) {
    cartMovie.quantity = qty.value;
    cartMovie.total = qty.value * cartMovie.total;
    this._snackBar.open(`The quantity was updated`, "OK", {
      duration: 3000,
    });
    this.calculateTotalPrice();
  }

  removeCartMovie(index: number) {
    this.cartMovies.splice(index, 1);
    this._snackBar.open(`The Movie was deleted`, "OK", {
      duration: 3000,
    });
    this.calculateTotalPrice();
  }

}
