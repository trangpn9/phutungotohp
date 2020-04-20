import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostContentRoutingModule } from './post-content-routing.module';
import { PostContentComponent } from './post-content.component';


@NgModule({
  declarations: [PostContentComponent],
  imports: [
    CommonModule,
    PostContentRoutingModule
  ]
})
export class PostContentModule { }
