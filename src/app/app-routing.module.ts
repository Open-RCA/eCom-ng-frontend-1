import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'pages', loadChildren: () => import('./componets/pages/pages.module').then(m => m.PagesModule) }, { path: 'pages', loadChildren: () => import('./components/pages/pages.module').then(m => m.PagesModule) }, { path: 'pages', loadChildren: () => import('./components/home-page/home-page.module').then(m => m.HomePageModule) }, { path: 'pages', loadChildren: () => import('./components/women-page/women-page.module').then(m => m.WomenPageModule) }, { path: 'pages', loadChildren: () => import('./components/men-page/men-page.module').then(m => m.MenPageModule) }, { path: 'pages', loadChildren: () => import('./components/product-view/product-view.module').then(m => m.ProductViewModule) }, { path: 'pages', loadChildren: () => import('./components/shoes-page/shoes-page.module').then(m => m.ShoesPageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
