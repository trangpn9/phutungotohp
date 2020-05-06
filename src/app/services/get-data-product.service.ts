import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSetting } from './../constant/init-api';

@Injectable({
  providedIn: 'root'
})
export class GetDataProductService {

  constructor(
    private http: HttpClient,
  ) { }

  getFulldata() {    
    return this.http.get(`${AppSetting.API_SERVICE}wp/v2/all-product`);        
  }

  getProductDetailById(id: any) {
    return this.http.get(`${AppSetting.API_SERVICE}wp/v2/product-detail/${id}`);
  }

  getPaginateProduct() {    
    return this.http.get(`${AppSetting.API_SERVICE}wp/v2/paginate-product`);
  }

  
}
