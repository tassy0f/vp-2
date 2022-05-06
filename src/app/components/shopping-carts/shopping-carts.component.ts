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
    setTimeout(() => {let i = 7;
      this.productList.push(
        new Product(i++,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png')
      );
    }, 2000);  
  }

}
