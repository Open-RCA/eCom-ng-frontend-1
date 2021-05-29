import { ProductViewModule } from './components/product-view/product-view.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricesPipe } from './core/pipes/prices.pipe';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    AppComponent,
    PricesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductViewModule,
     RouterModule,
    FontAwesomeModule,
    IonicModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
