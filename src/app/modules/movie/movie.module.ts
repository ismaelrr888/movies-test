import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MovieRoutingModule } from "./movie-routing.module";
import { MovieComponent, FilmDetailsComponent } from "../../components";
import { MovieService } from "../../service";
import { SharedMaterialModule } from "../shared.material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DetailsFilmGuard } from "src/app/resolves/details-film.guard";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MovieComponent, FilmDetailsComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [MovieService, DetailsFilmGuard]
})
export class MovieModule { }
