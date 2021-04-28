import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenPageRoutingModule } from './men-page-routing.module';
import { MenPageComponent } from './men-page.component';


@NgModule({
  declarations: [MenPageComponent],
  imports: [
    CommonModule,
    MenPageRoutingModule
  ]
})
export class MenPageModule { }
