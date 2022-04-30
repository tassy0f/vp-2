import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from './models/product';
@Component({
  selector: 'app-shopping-carts',
  templateUrl: './shopping-carts.component.html',
  styleUrls: ['./shopping-carts.component.scss']
})
export class ShoppingCartsComponent implements OnInit {

  productList: Product [] = [];

  constructor(private prodService:ProductService) { }

  ngOnInit(): void {
    this.productList = this.prodService.getProducts();
  }

  onScroll() {
    // setTimeout({},1000)
    console.log("scrolled!!");
  }

}
