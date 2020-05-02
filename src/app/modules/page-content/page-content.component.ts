import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { GetDataPageService } from './../../services/get-data-page.service';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent implements OnInit {

  faCar = faCar;
  data: any;
  slug: string;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private route: ActivatedRoute,
    private _getDataPageDetail: GetDataPageService,
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {
    this._document.body.classList.remove('homePage');
    this._document.body.classList.add('isNotHomePage');

    this.route.params.subscribe((params) => {
      this.data = null;
      const idPage = params['id'];
      this.slug = params['slug'];      
      this._getDataPageDetail.getPageDetailById(idPage).subscribe((data: any) => {
        this.data = {...data};    
        this.title.setTitle(this.data['title']['rendered']  + ' | VHP Auto - Hà Nội'); 
      });
    });
  }

}
