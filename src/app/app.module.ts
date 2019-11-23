import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FlexLayoutModule } from "@angular/flex-layout";
import { CartService } from './service';
import { TruncatePipe } from './pipe/index';

@NgModule({
  declarations: [AppComponent, TruncatePipe],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [CartService],
  exports: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
