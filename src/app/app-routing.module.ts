import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonVhpAutoModule } from './modules/common-vhp-auto/common-vhp-auto.module';

import { HomeComponent } from './pages/home/home.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { SlideCategoryComponent } from './components/slide-category/slide-category.component';
import { ShoppingComponent } from './modules/shopping/shopping.component';
import { LienHeComponent } from './components/lien-he/lien-he.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full'},      
  { path: 'san-pham', loadChildren: () => import('./modules/category-products/category-products.module').then(m => m.CategoryProductsModule) },
  { path: 'search', loadChildren: () => import('./modules/search-result/search-result.module').then(m => m.SearchResultModule) },
  { path: 'page', loadChildren: () => import('./modules/page-content/page-content.module').then(m => m.PageContentModule) },
  { path: 'post', loadChildren: () => import('./modules/post-content/post-content.module').then(m => m.PostContentModule) },
  { path: 'thanh-toan', component: ShoppingComponent },
  { path: 'lien-he', component: LienHeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,    
    FontAwesomeModule,
    CommonVhpAutoModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
      ),    
    CarouselModule,    
  ],
  declarations: [    
    HomeComponent,
    SlideshowComponent,
    SlideCategoryComponent,
    ShoppingComponent,
    LienHeComponent,
  ],
  exports: [
    CommonModule,
    RouterModule,
  ]
})
export class AppRoutingModule { }
