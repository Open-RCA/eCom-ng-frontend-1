import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomenPageRoutingModule } from './women-page-routing.module';
import { WomenPageComponent } from './women-page.component';


@NgModule({
  declarations: [WomenPageComponent],
  imports: [
    CommonModule,
    WomenPageRoutingModule,
    SharedModule
  ]
})
export class WomenPageModule { }
