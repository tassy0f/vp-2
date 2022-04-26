import { Injectable } from '@angular/core';
import { Product } from '../components/shopping-carts/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(
      1, 
      'Lexus', 
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',
      140000,
      'LFA',
      'assets/LFA.jpg'
    ),
    new Product(
      2, 
      'Audi', 
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',
      215000,
      'R8',
      'assets/R8.jpg'
    ),
    new Product(
      3, 
      'Toyota', 
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',
      85000,
      'LandCruiser 200',
      'assets/LandCruiser.jpg'
    ),
    new Product(
      4, 
      'None', 
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',
      600000,
      ' ',
      'assets/404.jpg'
    ),
    new Product(
      5, 
      'None', 
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',
      600000,
      ' ',
      'assets/404.jpg'
    ),
    new Product(
      6, 
      'None', 
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',
      600000,
      ' ',
      'assets/404.jpg'
    ),
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products
  }
}
