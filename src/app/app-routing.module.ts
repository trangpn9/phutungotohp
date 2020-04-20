import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonVhpAutoModule } from './modules/common-vhp-auto/common-vhp-auto.module';

import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { SlideCategoryComponent } from './components/slide-category/slide-category.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full'},      
  { path: 'san-pham', loadChildren: () => import('./modules/category-products/category-products.module').then(m => m.CategoryProductsModule) },
  { path: 'search', loadChildren: () => import('./modules/search-result/search-result.module').then(m => m.SearchResultModule) },
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
    PageNotFoundComponent,
    HomeComponent,
    SlideshowComponent,
    SlideCategoryComponent,
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
