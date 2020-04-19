import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenderHtmlPipe } from './../../pipes/render-html.pipe';
import { TruncateTitlePipe } from './../../pipes/truncate-title.pipe';
import { SearchComponent } from './../../components/search/search.component';

@NgModule({
  declarations: [
    RenderHtmlPipe,
    TruncateTitlePipe,
    SearchComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RenderHtmlPipe,
    TruncateTitlePipe,
    SearchComponent,
  ]
})
export class CommonVhpAutoModule { }
