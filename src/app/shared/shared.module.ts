import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { SwiperModule } from "swiper/angular";
import { FooterComponent } from './footer/footer.component'
import { NavbarComponent } from './navbar/navbar.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { SellingBrandsComponent } from './selling-brands/selling-brands.component';
import { PagesHeaderComponent } from './pages-header/pages-header.component';
<<<<<<< HEAD
import { DisplayCardComponent } from './display-card/display-card.component';
=======
import { BrandComponent } from './brand/brand.component';
import { ProductSliderComponent } from './productSlider/product-slider/product-slider.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
>>>>>>> 31fec7dacd44614bd14e4ad74877ba412cb804f8

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    GridViewComponent,
    SellingBrandsComponent,
    PagesHeaderComponent,
<<<<<<< HEAD
    DisplayCardComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    PagesHeaderComponent,
    GridViewComponent,
    DisplayCardComponent
  ],
=======
    BrandComponent,
    ProductSliderComponent,
    CarouselComponent,
    ProductComponent
  ],
    exports: [
        FooterComponent,
        NavbarComponent,
        PagesHeaderComponent,
        GridViewComponent,
        BrandComponent,
        ProductSliderComponent,
        SellingBrandsComponent,
        CarouselComponent,
        ProductComponent
    ],
>>>>>>> 31fec7dacd44614bd14e4ad74877ba412cb804f8
  imports: [
    RouterModule,
    SwiperModule

  ],
  providers: [],
})
export class SharedModule { }
