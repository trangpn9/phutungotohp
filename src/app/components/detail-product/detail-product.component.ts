import { Component, OnInit, Inject } from '@angular/core';
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  faCar = faCar;

  constructor(
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit() {
    this._document.body.classList.remove('homePage');
    this._document.body.classList.add('isNotHomePage');
  }

}
