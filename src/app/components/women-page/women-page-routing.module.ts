import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomenPageComponent } from './women-page.component';

const routes: Routes = [{ path: '', component: WomenPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WomenPageRoutingModule { }
