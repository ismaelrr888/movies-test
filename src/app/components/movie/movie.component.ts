import { Component, OnInit, ViewChild } from "@angular/core";
import { Movie } from "src/app/model/movie";
import { MovieService, CartService } from "../../service";
import { MatPaginator, MatSnackBar } from "@angular/material";
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

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
  form: FormGroup;

  paginate: any = {
    pageIndex: 0,
    pageSize: 5
  };

  constructor(private _movieService: MovieService,
    private _fb: FormBuilder, private _cartService: CartService, private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.form = this._fb.group({
      films: this._fb.array([])
    });
    this._movieService.getMovies().subscribe(response => {
      this.movies = response;
      this.moviesFilter = response;
      this.total = this.moviesFilter.length;

      this.completeForm();
    });
    this.paginator.page.subscribe(value => {
      this.paginate.pageIndex = value.pageIndex;
      this.paginate.pageSize = value.pageSize;
      this.completeForm();
    });
  }

  addNewMovie(movie: Movie): FormGroup {
    return this._fb.group({
      movie: this._fb.group({
        id: new FormControl(movie.id),
        name: new FormControl(movie.name),
        price: new FormControl(movie.price),
        genre: new FormControl(movie.genre),
        description: new FormControl(movie.description),
        image: new FormControl(movie.image_url),
        title: new FormControl(movie.title)
      }),
      qty: new FormControl(1)
    });
  }

  addMovie(movie: Movie) {
    this.moviesFormGroup.push(this.addNewMovie(movie));
  }

  get moviesFormGroup(): FormArray {
    return this.form.get('films') as FormArray;
  }

  getControlsMovies(pos: number): FormGroup {
    return this.moviesFormGroup.controls[pos] as FormGroup;
  }

  searchValueKeyWord(event) {
    this.moviesFilter = this._movieService.searchMoviesByFilter(
      event,
      this.movies
    );
    this.total = this.moviesFilter.length;
    this.paginator.firstPage();
    this.completeForm();
  }

  completeForm() {
    // tslint:disable-next-line: max-line-length
    this.form = this._fb.group({
      films: this._fb.array([])
    });
    const films = this.moviesFilter.slice(this.paginate.pageIndex * this.paginate.pageSize, (this.paginate.pageIndex + 1) * this.paginate.pageSize);
    films.forEach(i => {
      this.addMovie(i);
    });
  }

  addMovieToCart(movie: FormGroup, qty: number = 1) {
    this._cartService.addMovies(movie.getRawValue(), qty);
    this._snackBar.open(`The DVD with title ${movie.get('title').value} was added to cart shop`, "OK", {
      duration: 4000,
    });
  }

}
