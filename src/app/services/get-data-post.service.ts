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

  getPostDetailById(id: any) {
    return this.http.get(`${AppSetting.API_SERVICE}wp/v2/posts/${id}?_embed`);
  }
}
