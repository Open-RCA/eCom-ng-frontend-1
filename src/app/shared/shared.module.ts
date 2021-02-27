import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component'
import { NavbarComponent } from './navbar/navbar.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { SellingBrandsComponent } from './selling-brands/selling-brands.component';
import { PagesHeaderComponent } from './pages-header/pages-header.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    GridViewComponent,
    SellingBrandsComponent,
    PagesHeaderComponent
  ],
    exports: [
        FooterComponent,
        NavbarComponent,
        PagesHeaderComponent,
        GridViewComponent
    ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class SharedModule { }
