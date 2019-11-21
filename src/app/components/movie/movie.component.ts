import { Component, OnInit, ViewChild } from "@angular/core";
import { Movie } from "src/app/model/movie";
import { MovieService } from "../../service";
import { MatTableDataSource, MatPaginator } from "@angular/material";

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

  paginate: any = {
    pageIndex: 0,
    pageSize: 100
  };

  constructor(private _movieService: MovieService) {}

  ngOnInit() {
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
}
