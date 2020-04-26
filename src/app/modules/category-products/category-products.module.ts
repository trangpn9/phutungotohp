import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { CategoryProductsRoutingModule } from './category-products-routing.module';
import { CategoryProductsComponent } from './category-products.component';


@NgModule({
  declarations: [CategoryProductsComponent],
  imports: [
    CommonModule,
    NgbModule,   
    NgbTabsetModule,
    CategoryProductsRoutingModule,
  ]
})
export class CategoryProductsModule { }
