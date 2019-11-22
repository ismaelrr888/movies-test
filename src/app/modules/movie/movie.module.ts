import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MovieRoutingModule } from "./movie-routing.module";
import { MovieComponent, FilmDetailsComponent } from "../../components";
import { MovieService, CartService } from "../../service";
import { SharedMaterialModule } from "../shared.material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TruncatePipe } from "src/app/pipe";
import { DetailsFilmGuard } from "src/app/resolves/details-film.guard";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MovieComponent, TruncatePipe, FilmDetailsComponent],
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
