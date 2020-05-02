import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './../../components/page-not-found/page-not-found.component';
import { PageContentComponent } from './page-content.component';
import { CommonVhpAutoModule } from './../common-vhp-auto/common-vhp-auto.module';

const routes: Routes = [
  { path: ':id/:slug', component: PageContentComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonVhpAutoModule
  ],
  exports: [
    RouterModule,
    CommonVhpAutoModule
  ]
})
export class PageContentRoutingModule { }
