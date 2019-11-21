import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MovieRoutingModule } from "./movie-routing.module";
import { MovieComponent } from "../../components";
import { MovieService } from "../../service";
import { SharedMaterialModule } from "../shared.material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TruncatePipe } from "src/app/pipe";

@NgModule({
  declarations: [MovieComponent, TruncatePipe],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedMaterialModule,
    FlexLayoutModule
  ],
  providers: [MovieService]
})
export class MovieModule {}
