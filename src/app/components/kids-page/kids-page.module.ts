import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KidsPageRoutingModule } from './kids-page-routing.module';
import { KidsPageComponent } from './kids-page.component';


@NgModule({
  declarations: [KidsPageComponent],
  imports: [
    CommonModule,
    KidsPageRoutingModule
  ]
})
export class KidsPageModule { }
