import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { Title, Meta } from '@angular/platform-browser';
import { CommonService } from './../../services/common.service';
import { GetDataProductService } from './../../services/get-data-product.service';

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

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private title: Title,
    private meta: Meta,
    private _commonService: CommonService,    
    private _getDataProductService: GetDataProductService,  
  ) { }

  ngOnInit() {
    this._document.body.classList.remove('homePage');
    this._document.body.classList.add('isNotHomePage');

    this.title.setTitle('Danh sách sản phẩm | Phụ tùng ôtô Hưng Phát');
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
  }

  pageLoad($page) {    
    const productsPerPage = this._commonService.fnPaginator(this.allProducts, $page);
    const { data } = productsPerPage;
    this.data = data;
    this._commonService.scrollToTopAuto();
  }

}
