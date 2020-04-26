import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-preview-product]',
  templateUrl: './preview-product.component.html',
  styleUrls: ['./preview-product.component.css']
})
export class PreviewProductComponent implements OnInit {

  @Input('idSanPham') id:string = null;
  @Input('slugSanPham') slug:string = null;
  @Input('imgSanPham') imgURL:string = null;
  @Input('priceSanpham') price:string = null;
  @Input('salePriceSanpham') salePrice:string = null;
  @Input('titleSanpham') title:string = null;

  constructor() { }

  ngOnInit() {
  }

}
