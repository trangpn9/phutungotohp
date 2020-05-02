import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSetting } from './../constant/init-api';

@Injectable({
  providedIn: 'root'
})
export class GetDataPageService {

  constructor(
    private http: HttpClient,
  ) { }

  getPageDetailById(id: any) {    
    return this.http.get(`${AppSetting.API_SERVICE}wp/v2/pages/${id}?_embed`);    
  }
}
