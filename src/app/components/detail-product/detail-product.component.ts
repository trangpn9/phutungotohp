import { Component, OnInit, Inject } from '@angular/core';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { CommonService } from './../../services/common.service';
import { GetDataProductService } from './../../services/get-data-product.service';
import { GetDataPageService } from './../../services/get-data-page.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  faCar = faCar;

  data: any;  
  acf: any;
  imgPreview: string;
  relateProducts: any[] = [];
  viewedProducts: any[] = []; // List viewed products
  quantityProduct: number = 1; // Default quantity product
  idProduct: string = null; // Get id Product form router parameter

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private route: ActivatedRoute,
    private _getDataProduct: GetDataProductService,
    private _getDataPageDetail: GetDataPageService,
    private _commonService: CommonService,
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {
    this._document.body.classList.remove('homePage');
    this._document.body.classList.add('isNotHomePage');

    this.route.params.subscribe((params) => {
      this.idProduct = params['id'];
      const viewedProducts = localStorage.getItem('viewedProducts');    
      if (viewedProducts === null) { // Case not exist localStorage      
        localStorage.setItem('viewedProducts', JSON.stringify([this.idProduct]));
      } else { // Case have localstorage
        const parseViewedProducts = JSON.parse(localStorage.getItem('viewedProducts'));         
        const checkIndex = parseViewedProducts.indexOf(this.idProduct);
        if (checkIndex < 0) {
          parseViewedProducts.push(this.idProduct);
          if (parseViewedProducts.length === 6) {
            parseViewedProducts.shift();
          }
          localStorage.setItem('viewedProducts', JSON.stringify(parseViewedProducts));
        } else {        
          parseViewedProducts.splice(checkIndex, 1);
          parseViewedProducts.push(this.idProduct);
          if (parseViewedProducts.length === 6) {
            parseViewedProducts.shift();
          }
          localStorage.setItem('viewedProducts', JSON.stringify(parseViewedProducts));
        }
      }
  
      const getAllProducts = this._commonService.getAllProducts.value;    
      const isCheckDataProduct = getAllProducts.length === 0 ? false : true;
      const getViewedProducts = JSON.parse(localStorage.getItem('viewedProducts'));            
      if (isCheckDataProduct) {          
            
        this.viewedProducts = this.searchViewedProduct(getViewedProducts, getAllProducts);      
        
        getAllProducts.forEach((product) => {
          if (parseInt(this.idProduct) === parseInt(product.id)) {          
            this.data = {...product};
            this.imgPreview = this.data['img'] === false ? './assets/img/default-img-phutungsuzuki.jpg' : this.data['img'][0];
            this.title.setTitle(this.data['title'] + ' | Hà Nội');
            if (product['category_id']) {
              this.relateProducts = this.searchRelateProduct(parseInt(product['category_id']), parseInt(product['id']), getAllProducts);
            }
          }
        });
      } else {                              
        this._getDataProduct.getProductDetailById(this.idProduct).subscribe((data: any) => {                
          this.data = {...data};
          this.imgPreview = this.data['img'] === false ? './assets/img/default-img-phutungsuzuki.jpg' : this.data['img'][0];
          this.title.setTitle(this.data['title'] + ' | Hà Nội');      
          this._commonService.getAllProducts.subscribe((dataAllProducts: any) => {
            this.viewedProducts = this.searchViewedProduct(getViewedProducts, [...dataAllProducts]);             
            if (this.data['category_id']) {
              this.relateProducts = this.searchRelateProduct(parseInt(this.data['category_id']), parseInt(this.data['id']), [...dataAllProducts]);
            }
          })
        }, (err) => {
          console.log('ERRORS: ', err);
        });
      }
    });

    this._getDataPageDetail.getPageDetailById('1190').subscribe((data: any) => {      
      const { acf } = data;
      this.acf = acf;
    });
  }

  /**
   * Function get viewed products
   * @param arrViewedProduct 
   * @param allProducts 
   */
  searchViewedProduct(arrViewedProduct: any[], allProducts: any[]) {
    let result: any[] = [];
    for (let index = 0; index < arrViewedProduct.length - 1; index++) {
      const idProductSearch = parseInt(arrViewedProduct[index]);
      allProducts.forEach((product) => {
        if (idProductSearch === parseInt(product.id)) {          
          return result = [...result,product];          
        }
      });      
    }
    return result;
  }

  /**
   * Function get 8 relate products
   * @param categoryId 
   * @param allProducts 
   */
  searchRelateProduct(categoryId: number, idProduct: number, allProducts: any[]) {
    let result: any[] = [];
    allProducts.forEach((product) => {      
      if (idProduct !== product['id']) {
        const gettArrCate = product['arr_info_category'] ;
        if (result.length < 4) {
          gettArrCate.forEach((cateInfo) => {
            if (categoryId === parseInt(cateInfo['term_id'])) {          
              return result = [...result,product];          
            }
          });
        }
      }
    });
    return result;
  }

  changeImgPreview(url: string) {  
    return this.imgPreview = url;
  }  

  addToCart(dangerTpl) {
    const img:string = this.data.img[0];
    const price: string = this.data['sale_price'] === '' ? this.data['price'] : this.data['sale_price']; 
    const title: string = this.data['title'];
    const newItemProductToCart = {id: this.idProduct, title,  quantity: this.quantityProduct, price, img}; // Set new item for cart
    const getShoppingList = JSON.parse(localStorage.getItem('shoppingList'));
    if (getShoppingList !== null) {
      let newDataShopping: any[] = [];
      getShoppingList.forEach(element => {        
        if (parseInt(element.id) !== parseInt(this.idProduct)) {                              
          newDataShopping.push(element);
        }
      });      
      newDataShopping = [...newDataShopping, newItemProductToCart];
      localStorage.setItem('shoppingList', JSON.stringify(newDataShopping));
      this._commonService.setDataShoppingCart(newDataShopping);
    } else {            
      localStorage.setItem('shoppingList', JSON.stringify([newItemProductToCart]))
      this._commonService.setDataShoppingCart([newItemProductToCart]);
    }
    
    // this._commonService.show(dangerTpl, { classname: 'bg-success text-light', delay: 3500 });
    
  }

}
