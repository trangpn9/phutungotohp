import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CommonVhpAutoModule } from './modules/common-vhp-auto/common-vhp-auto.module';

import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full'},      
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    PageNotFoundComponent,
    HomeComponent,
    SlideshowComponent,
  ],
  imports: [
    CommonModule,
    CommonVhpAutoModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
