import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component'
import { NavbarComponent } from './navbar/navbar.component';
import { GridViewComponent } from './grid-view/grid-view.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    GridViewComponent
  ],
  exports:[
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class SharedModule { }
