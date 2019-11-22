import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CartRoutingModule } from "./cart-routing.module";
import { CartComponent } from "src/app/components";

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule],
  providers: []
})
export class CartModule { }
