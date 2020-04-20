import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostContentComponent } from './post-content.component';
import { CommonVhpAutoModule } from '../common-vhp-auto/common-vhp-auto.module';

const routes: Routes = [{ path: '', component: PostContentComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonVhpAutoModule,
  ],
  exports: [
    RouterModule,
    CommonVhpAutoModule,
  ]
})
export class PostContentRoutingModule { }
