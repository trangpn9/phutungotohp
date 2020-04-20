import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { faCar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {

  faCar = faCar;

  constructor(
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit() {
    this._document.body.classList.remove('homePage');
    this._document.body.classList.add('isNotHomePage');
  }

}
