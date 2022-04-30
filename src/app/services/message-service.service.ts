import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../components/shopping-carts/models/product';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  subject:any = new Subject()

  constructor() { }

  sendMessage(product: Product) {
    this.subject.next(product)   
  }

  getMessage() {
    return this.subject.asObservable()
  }
}