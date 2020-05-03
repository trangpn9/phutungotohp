import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { Title, Meta } from '@angular/platform-browser';

import { GetDataPostService } from './../../services/get-data-post.service';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {

  data: any[];
  faCar = faCar;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private title: Title,
    private meta: Meta,
    private _getDataPost: GetDataPostService
  ) { }

  ngOnInit() {
    this._document.body.classList.remove('homePage');
    this._document.body.classList.add('isNotHomePage');

    this.title.setTitle('Tin tức | VHP Auto - Hà Nội');
    this._getDataPost.getListPostPerpage().subscribe((data: any) => {
      this.data = [...data];
    });
  }

}
