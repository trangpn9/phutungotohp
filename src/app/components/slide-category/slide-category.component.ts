import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slide-category',
  templateUrl: './slide-category.component.html',
  styleUrls: ['./slide-category.component.css']
})
export class SlideCategoryComponent implements OnInit {
  
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  customOptions: OwlOptions = {
    loop: true,    
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,  
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }

  constructor() { }

  ngOnInit() {
  }

}
