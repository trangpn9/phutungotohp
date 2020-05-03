import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { faCar } from '@fortawesome/free-solid-svg-icons';

import { GetDataPostService } from './../../../services/get-data-post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  
  faCar = faCar;
  data: any;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private route: ActivatedRoute,
    private _getDataPost: GetDataPostService,
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {
    this._document.body.classList.remove('homePage');
    this._document.body.classList.add('isNotHomePage');

    this.route.params.subscribe((params) => {
      this.data = null;
      const idPost = params['id'];

      this._getDataPost.getPostDetailById(idPost).subscribe((data: any) => {
        this.data = {...data};
        this.title.setTitle(this.data['title']['rendered']  + ' | VHP Auto - Hà Nội');
      });
    });
  }

}
