import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { faCar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quy-dinh-chinh-sach',
  templateUrl: './quy-dinh-chinh-sach.component.html',
  styleUrls: ['./quy-dinh-chinh-sach.component.css']
})
export class QuyDinhChinhSachComponent implements OnInit {
  
  faCar = faCar;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {
    this._document.body.classList.remove('homePage');
    this._document.body.classList.add('isNotHomePage');

    this.title.setTitle('Quy định & Chính sách | VHP Auto - Hà Nội');
  }

}
