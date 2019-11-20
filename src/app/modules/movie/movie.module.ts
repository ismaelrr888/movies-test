import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MovieRoutingModule } from "./movie-routing.module";
import { MovieComponent } from "../../components";
import { MovieService } from "../../service";

@NgModule({
  declarations: [MovieComponent],
  imports: [CommonModule, MovieRoutingModule],
  providers: [MovieService]
})
export class MovieModule {}
