import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieComponent, FilmDetailsComponent } from "../../components";
import { DetailsFilmGuard } from "src/app/resolves/details-film.guard";

const routes: Routes = [
  { path: "", component: MovieComponent },
  {
    path: "film/:id",
    component: FilmDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
