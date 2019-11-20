import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/movies",
    pathMatch: "full"
  },
  {
    path: "movies",
    loadChildren: () =>
      import("./modules/movie/movie.module").then(m => m.MovieModule)
  },
  {
    path: "cart",
    loadChildren: () =>
      import("./modules/cart/cart.module").then(m => m.CartModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
