import { Component, OnInit } from '@angular/core';
import { ScrollAutoService } from './services/scroll-auto.service';
import { GetDataProductService } from './services/get-data-product.service';
import { CommonService } from './services/common.service';

import { faShoppingCart, faDollarSign, faCloudRain } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  

  dataShopping: any[] = [];  

  faShoppingCart = faShoppingCart;
  faDollarSign = faDollarSign;
  faCloudRain = faCloudRain;  

  constructor(
    private _scrollService: ScrollAutoService,
    private _getDataProduct: GetDataProductService,
    private _commonService: CommonService,
  ) {}

  ngOnInit() {
    this._scrollService.setScrollTop();

    const getShoppingList = JSON.parse(localStorage.getItem('shoppingList'));
    if (getShoppingList !== null) {      
      this._commonService.setDataShoppingCart(getShoppingList);
    }    
    this._commonService.getShopping.subscribe((data: any[]) => {
      this.dataShopping = [...data];      
    });
    
    const dataProducts = this._commonService.getAllProducts.value;

    if (dataProducts.length === 0) {
      this._getDataProduct.getFulldata().subscribe((data:any) => {              
        this._commonService.setAllProducts([...data]);        
      }, (err) => {
        console.log('ERRORS: ', err);
      });
    }
  }
}