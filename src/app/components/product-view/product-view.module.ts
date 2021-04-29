import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductViewRoutingModule } from './product-view-routing.module';
import { ProductViewComponent } from './product-view.component';


@NgModule({
  declarations: [ProductViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductViewRoutingModule
  ]
})
export class ProductViewModule { }
