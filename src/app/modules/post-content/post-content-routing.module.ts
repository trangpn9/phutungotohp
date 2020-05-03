import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostContentComponent } from './post-content.component';
import { CommonVhpAutoModule } from '../common-vhp-auto/common-vhp-auto.module';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PageNotFoundComponent } from './../../components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: PostContentComponent },
  { path: ':id/:slug', component: PostDetailComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    PostDetailComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonVhpAutoModule,
  ],
  exports: [
    RouterModule,
    CommonVhpAutoModule,
    PostDetailComponent,
  ]
})
export class PostContentRoutingModule { }
