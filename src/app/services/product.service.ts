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
      'assets/R8.png'
    ),
    new Product(
      3, 
      'Toyota', 
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',
      100000,
      'LandCruiser 300',
      'assets/LandCruiser.jpg'
    ),
    new Product(
      4, 
      'Lamborghini', 
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',
      155000,
      'Huracan',
      'assets/Huracan.jpg'
    ),
     new Product(5,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
     new Product(6,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png')
  //   new Product(7,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(8,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(9,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(10,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(11,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(12,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(13,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(14,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(15,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(16,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(17,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(18,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(19,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(20,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(21,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(22,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(23,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(24,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(25,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(26,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(27,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(28,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(29,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(30,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(31,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(32,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(33,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(34,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(35,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(36,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(37,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(38,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(39,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(40,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(41,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(42,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  //   new Product(43,'WOW!','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum blanditiis iste sed, itaque officiis accusamus facere quisquam adipisci assumenda pariatur labore magnam, doloribus maxime laudantium ipsam modi fugit id recusandae.',600000,'Insane','assets/404.png'),
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products
  }
}
