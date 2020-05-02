import { Component, OnInit, Inject } from '@angular/core';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-lien-he',
  templateUrl: './lien-he.component.html',
  styleUrls: ['./lien-he.component.css']
})
export class LienHeComponent implements OnInit {

  data: any;
  faCar = faCar;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {
    this._document.body.classList.remove('homePage');
    this._document.body.classList.add('isNotHomePage');
    this.title.setTitle('Liên hệ | VHP Auto - Hà Nội');
  }

}
