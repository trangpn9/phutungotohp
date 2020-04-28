import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../services/common.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isShowResult: boolean = false;
  listNoteProductSearch: any[] = [];

  constructor(
    private _commonService: CommonService
  ) { }

  ngOnInit() {
  }

  searchProduct(code: any, name: any) {    
    this.listNoteProductSearch = [];
    let checkCode = code.value.toLowerCase().trim();
    let checkName = name.value.toLowerCase().trim();
    let listProductSearch: any[] = [];

    console.log('code: ', checkCode);
    console.log('name: ', checkName);

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

        console.log('list product search: ', listProductSearch);
        if (listProductSearch.length > 0) {
          const [product_1 = null, product_2 = null, product_3 = null, product_4 = null, product_5 = null] = listProductSearch;
          this.listNoteProductSearch = [product_1, product_2, product_3, product_4, product_5];
          console.log('note product: ', this.listNoteProductSearch);
        }
      });
    }
    
  } 

  outFocus() {
    this.isShowResult = false;
  }

}
