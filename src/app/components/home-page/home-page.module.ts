import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SelectedComponent } from './selected/selected.component';


@NgModule({
  declarations: [HomePageComponent, SelectedComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,
  ]
})
export class HomePageModule { }
