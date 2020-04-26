import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

import { faCar, faRandom, faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from './../../services/common.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  dataShopping: any[] = [];
  totalMoney: number = 0;

  faRandom = faRandom;
  faCar = faCar;
  faCompressArrowsAlt = faCompressArrowsAlt;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private title: Title,
    private meta: Meta,
    private _commonService: CommonService,
  ) { }

  ngOnInit() {
    this._document.body.classList.remove('homePage');
    this._document.body.classList.add('isNotHomePage');
    this.title.setTitle('Giỏ hàng - Phụ tùng ôtô Hưng Phát | Hà Nội');

    const getShoppingList = JSON.parse(localStorage.getItem('shoppingList'));
    if (getShoppingList !== null) {      
      this._commonService.setDataShoppingCart(getShoppingList);
    }    
    this._commonService.getShopping.subscribe((data: any[]) => {
      this.dataShopping = [...data];      
    });

  }

}
