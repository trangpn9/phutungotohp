import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSetting } from './../constant/init-api';

@Injectable({
  providedIn: 'root'
})
export class GetDataPostService {

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Get data post detail
   * @param id of Post
   */
  getPostDetailById(id: any) {
    return this.http.get(`${AppSetting.API_SERVICE}wp/v2/posts/${id}?_embed`);
  }

  /**
   * Get list post for home page
   */
  getListPostsHome() {    
    return this.http.get(`${AppSetting.API_SERVICE}wp/v2/posts?categories=1&per_page=3&_embed`);
  }
}
