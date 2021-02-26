import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricesPipe } from './core/pipes/prices.pipe';
import { SharedModule } from './shared/shared.module';
import { ProductViewComponent } from './components/site/product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PricesPipe,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
