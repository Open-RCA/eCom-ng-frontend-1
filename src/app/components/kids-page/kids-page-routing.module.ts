import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KidsPageComponent } from './kids-page.component';

const routes: Routes = [{ path: '', component: KidsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsPageRoutingModule { }
