import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { SwiperModule } from "swiper/angular";
import { FooterComponent } from './footer/footer.component'
import { NavbarComponent } from './navbar/navbar.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { SellingBrandsComponent } from './selling-brands/selling-brands.component';
import { PagesHeaderComponent } from './pages-header/pages-header.component';
import { BrandComponent } from './brand/brand.component';
import { ProductSliderComponent } from './productSlider/product-slider/product-slider.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    GridViewComponent,
    SellingBrandsComponent,
    PagesHeaderComponent,
    BrandComponent,
    ProductSliderComponent,
  ],
    exports: [
        FooterComponent,
        NavbarComponent,
        PagesHeaderComponent,
        GridViewComponent,
        BrandComponent,
        ProductSliderComponent,
        SellingBrandsComponent
    ],
  imports: [
    RouterModule,
    SwiperModule

  ],
  providers: [],
})
export class SharedModule { }
