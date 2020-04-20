import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit() {
    this._document.body.classList.remove('isNotHomePage');
    this._document.body.classList.add('homePage');
  }

}
