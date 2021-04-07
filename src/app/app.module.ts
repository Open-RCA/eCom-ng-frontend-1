import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SwiperModule } from "swiper/angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricesPipe } from './core/pipes/prices.pipe';
import { SharedModule } from './shared/shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ProductViewComponent } from './components/site/product-view/product-view.component';

import { IonicModule } from '@ionic/angular';
import { ProductSliderComponent } from './components/productSlider/product-slider/product-slider.component';
import { BrandComponent } from './components/brand/brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    PricesPipe,
    ProductViewComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule,
    IonicModule.forRoot()
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
