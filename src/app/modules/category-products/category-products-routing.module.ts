import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryProductsComponent } from './category-products.component';
import { CommonVhpAutoModule } from '../common-vhp-auto/common-vhp-auto.module';
import { DetailProductComponent } from 'src/app/components/detail-product/detail-product.component';

const routes: Routes = [
  { path: '', component: CategoryProductsComponent },
  { path: 'detail/:id/:slug', component: DetailProductComponent },
  { path: 'search/:code/:name', component: CategoryProductsComponent },
];

@NgModule({
  declarations: [
    DetailProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),    
    CommonVhpAutoModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    CommonVhpAutoModule,
  ]
})
export class CategoryProductsRoutingModule { }
