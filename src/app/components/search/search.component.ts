import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { CommonService } from './../../services/common.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private wasInside = false;

  isShowResult: boolean = false;
  listNoteProductSearch: any[] = [];

  constructor(
    private _commonService: CommonService,
    private eRef: ElementRef,
  ) { }

  ngOnInit() {
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {      
      this.isShowResult = false;
    }
    this.wasInside = false;
  }


  searchProduct(code: any, name: any) {    
    this.listNoteProductSearch = [];
    let checkCode = code.value.toLowerCase().trim();
    let checkName = name.value.toLowerCase().trim();
    let listProductSearch: any[] = [];

    if (checkCode !== '' || checkName !== '') {
      this.isShowResult = true;
      this._commonService.getAllProducts.subscribe((data) => {
        const getAllProducts = [...data];
        getAllProducts.forEach((element: any) => {
          let title = (element['title']).toLowerCase();

          if (checkCode !== '' && checkName === '') {            
            if (title.search(checkCode) > -1) {
              listProductSearch = [...listProductSearch, element];
            }          
          } else if (checkCode === '' && checkName !== '') {            
            if (title.search(checkName) > -1) {
              listProductSearch = [...listProductSearch, element];
            }          
          } else {            
            if (title.search(checkCode) > -1 && title.search(checkName) > -1) {
              listProductSearch = [...listProductSearch, element];
            }          
          }
        });
        
        if (listProductSearch.length > 0) {
          const [product_1 = null, product_2 = null, product_3 = null, product_4 = null, product_5 = null] = listProductSearch;
          this.listNoteProductSearch = [product_1, product_2, product_3, product_4, product_5];          
        }
      });
    }    
  } 

  outFocus() {    
    this.isShowResult = false;
  }

}
