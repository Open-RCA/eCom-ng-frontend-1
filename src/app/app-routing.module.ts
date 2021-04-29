import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'home', loadChildren: () => import('./components/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'women', loadChildren: () => import('./components/women-page/women-page.module').then(m => m.WomenPageModule) },
  { path: 'men', loadChildren: () => import('./components/men-page/men-page.module').then(m => m.MenPageModule) },
  { path: 'product', loadChildren: () => import('./components/product-view/product-view.module').then(m => m.ProductViewModule) },
  { path: 'shoes', loadChildren: () => import('./components/shoes-page/shoes-page.module').then(m => m.ShoesPageModule) },
  { path: 'kids', loadChildren: () => import('./components/kids-page/kids-page.module').then(m => m.KidsPageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
