import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {
    this._document.body.classList.remove('isNotHomePage');
    this._document.body.classList.add('homePage');
    this.title.setTitle('Phụ tùng ô tô Hưng Phát');
  }

}
