import { Component, Input, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  providers: [ModalDialogService]
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem!: Product 
  

  constructor(public readonly modalService: ModalDialogService, private msg:MessageServiceService) {
  }
  
  modalCall() {
    this.modalService.isShowDialog = true
    this.msg.sendMessage(this.productItem)     
  }

  ngOnInit() {
    
  }
}
