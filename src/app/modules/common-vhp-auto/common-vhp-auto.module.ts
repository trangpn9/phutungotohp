import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RenderHtmlPipe } from './../../pipes/render-html.pipe';
import { TruncateTitlePipe } from './../../pipes/truncate-title.pipe';
import { SearchComponent } from './../../components/search/search.component';
import { HeaderComponent } from './../../components/header/header.component';

@NgModule({
  declarations: [
    RenderHtmlPipe,
    TruncateTitlePipe,
    HeaderComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    RenderHtmlPipe,
    TruncateTitlePipe,
    HeaderComponent,
    SearchComponent,
  ]
})
export class CommonVhpAutoModule { }
