import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoesPageComponent } from './shoes-page.component';

const routes: Routes = [{ path: '', component: ShoesPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoesPageRoutingModule { }
