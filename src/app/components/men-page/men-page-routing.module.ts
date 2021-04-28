import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenPageComponent } from './men-page.component';

const routes: Routes = [{ path: '', component: MenPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenPageRoutingModule { }
