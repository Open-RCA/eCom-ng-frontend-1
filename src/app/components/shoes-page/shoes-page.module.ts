import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoesPageRoutingModule } from './shoes-page-routing.module';
import { ShoesPageComponent } from './shoes-page.component';


@NgModule({
  declarations: [ShoesPageComponent],
  imports: [
    CommonModule,
    ShoesPageRoutingModule
  ]
})
export class ShoesPageModule { }
