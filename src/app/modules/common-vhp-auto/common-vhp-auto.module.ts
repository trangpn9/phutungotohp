import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RenderHtmlPipe } from './../../pipes/render-html.pipe';
import { TruncateTitlePipe } from './../../pipes/truncate-title.pipe';
import { SearchComponent } from './../../components/search/search.component';
import { HeaderComponent } from './../../components/header/header.component';
import { BreadcrumbComponent } from './../../components/breadcrumb/breadcrumb.component';
import { PreviewProductComponent } from './../../components/preview-product/preview-product.component';
import { PaginationComponent } from './../../components/pagination/pagination.component';
import { PaymentComponent } from './../../components/payment/payment.component';
import { PageNotFoundComponent } from './../../components/page-not-found/page-not-found.component';
import { PreLoadingComponent } from './../../components/pre-loading/pre-loading.component';

@NgModule({
  declarations: [
    RenderHtmlPipe,
    TruncateTitlePipe,
    PageNotFoundComponent,
    HeaderComponent,
    SearchComponent,
    BreadcrumbComponent,
    PreviewProductComponent,
    PaginationComponent,
    PaymentComponent,
    PreLoadingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    RenderHtmlPipe,
    PageNotFoundComponent,
    TruncateTitlePipe,
    FontAwesomeModule,
    HeaderComponent,
    SearchComponent,
    BreadcrumbComponent,
    PreviewProductComponent,
    PaginationComponent,
    PaymentComponent,
    PreLoadingComponent,
  ]
})
export class CommonVhpAutoModule { }
