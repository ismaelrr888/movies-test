import { Component, OnInit, ViewChild } from "@angular/core";
import { Movie } from "src/app/model/movie";
import { MovieService, CartService } from "../../service";
import { MatTableDataSource, MatPaginator, MatSnackBar } from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: "movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  movies: Movie[];
  moviesFilter: Movie[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  pageSizeOptions = [5, 10, 100, 200];
  total = 0;
  itemsPerPage = 100;
  form: FormGroup;

  paginate: any = {
    pageIndex: 0,
    pageSize: 100
  };

  constructor(private _movieService: MovieService,
    private _fb: FormBuilder, private _cartService: CartService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.form = this._fb.group({
      films: this._fb.array([])
    })
    this._movieService.getMovies().subscribe(response => {
      this.movies = response;
      this.moviesFilter = response;
      this.total = this.moviesFilter.length;
    });
    this.paginator.page.subscribe(value => {
      this.paginate.pageIndex = value.pageIndex;
      this.paginate.pageSize = value.pageSize;
    });
  }

  searchValueKeyWord(event) {
    this.moviesFilter = this._movieService.searchMoviesByFilter(
      event,
      this.movies
    );
    this.total = this.moviesFilter.length;
  }

  addMovieToCart(movie, qty: number = 1) {
    this._cartService.addMovies(movie, qty);
    this._snackBar.open(`The DVD with title ${movie.title} was added to cart shop`, "OK", {
      duration: 4000,
    });
  }

}
