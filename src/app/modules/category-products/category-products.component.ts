import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { CommonService } from './../../services/common.service';
import { GetDataProductService } from './../../services/get-data-product.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {

  faCar = faCar;

  data: any[] = []; //Current product
  allProducts: any[] = [];
  totalPage: number = 0;
  totalProduct: number = 0;
  currentPage: number = 1;
  titleShow: string = '';
  isSearch: boolean = false;
  searchResultEmpty: boolean = false;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private title: Title,
    private meta: Meta,
    private _commonService: CommonService,    
    private _getDataProductService: GetDataProductService,
    private _route: ActivatedRoute,  
  ) { }

  ngOnInit() {
    this._document.body.classList.remove('homePage');
    this._document.body.classList.add('isNotHomePage');

    this._route.url.subscribe((data: any[]) => {    
      if (data.length === 0) {
        this.isSearch = false;
        this.title.setTitle('Danh sách sản phẩm | Phụ tùng ôtô Hưng Phát');
        this.titleShow = 'Tìm phụ tùng theo xe';
        this._commonService.getAllProducts.subscribe((products) => {
          this.allProducts = [...products];
          const productsPerPage = this._commonService.fnPaginator(this.allProducts);
          const { data } = productsPerPage;
          this.data = data;
        });
        
        this._getDataProductService.getPaginateProduct().subscribe((data: any) => {      
          const {total_page, total_product} = data;      
          this.totalPage = total_page;
          this.totalProduct = total_product;
        });
      } else {          
        const [ url, codeProduct, nameProduct ] = data;           
        this.title.setTitle('Tìm kiếm sản phẩm | Phụ tùng ôtô Hưng Phát');   
        this.isSearch = true;
        this.titleShow = 'Tìm kiếm sản phẩm' + (codeProduct.path !== '' ? ` - Mã Sản Phẩm: ${codeProduct.path}`: '') + (nameProduct.path !== '' ? ` - Tên Sản Phẩm: ${nameProduct.path}`: '');     
        if (url.path === 'search' && codeProduct.path === '' && nameProduct.path === '') {
          this.searchResultEmpty = true;
          this.data = ['Chưa có thông tin tìm kiếm! Bạn hãy nhập thông tin để tìm kiểm sản phẩm mình cần!'];
        } else if (url.path === 'search' && (codeProduct.path !== '' || nameProduct.path !== '')) {          
          let checkCode = codeProduct.path.toLowerCase().trim();
          let checkName = nameProduct.path.toLowerCase().trim();
          let listProductSearch: any[] = [];
                      
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
              this.searchResultEmpty = false;
              this.data = [...listProductSearch];
            }
            console.log('product: ', listProductSearch);
          });

        
        }
      }
    });    

  }

  pageLoad($page) {    
    const productsPerPage = this._commonService.fnPaginator(this.allProducts, $page);
    const { data } = productsPerPage;
    this.data = data;
    this._commonService.scrollToTopAuto();
  }

}
