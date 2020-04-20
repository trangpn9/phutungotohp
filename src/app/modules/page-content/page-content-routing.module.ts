import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageContentComponent } from './page-content.component';
import { CommonVhpAutoModule } from '../common-vhp-auto/common-vhp-auto.module';

const routes: Routes = [{ path: '', component: PageContentComponent }];

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
