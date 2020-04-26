import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  toasts: any[] = [];

  /**
   * Master data for system
   */
  public getAllProducts = new BehaviorSubject<any[]>([]);
  public getAllPosts = new BehaviorSubject<any[]>([]);
  public getShopping = new BehaviorSubject<any[]>([]);

  constructor() { }

  /**
   * Function save data product
   */
  setAllProducts(data: any[]) {    
    return this.getAllProducts.next([...data]);
  }

  /**
   * Function save data post
   */
  setAllPost(data: any[]) {
    return this.getAllPosts.next([...data]);
  }

  /**
   * Set data shopping cart
   * @param data 
   */
  setDataShoppingCart(data: any[]) {
    return this.getShopping.next([...data]);
  }

  /**  
   * @param items arr
   * @param page numbler
   * @param per_page number
   */
  fnPaginator(items, page = 1, per_page = 12) {      
    let offset = (page - 1) * per_page;
  
    let paginatedItems = items.slice(offset).slice(0, per_page);
    let total_pages = Math.ceil(items.length / per_page);
    return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: (total_pages > page) ? page + 1 : null,
      total: items.length,
      total_pages: total_pages,
      data: paginatedItems
    };
  }
  
  /**
   * Scrll to top
   */
  scrollToTopAuto() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  /**
   * Notifications
   * @param textOrTpl 
   * @param options 
   */
  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {    
    return this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast) {
    return this.toasts = this.toasts.filter(t => t !== toast);
  }
}
