import { AfterContentInit, Component} from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { Product } from '../models/product';
@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements AfterContentInit {

  
  carInfo:any = [];

  constructor(private messageServ:MessageServiceService) { }
  
  ngAfterContentInit(): void {
    this.messageServ.getMessage().subscribe((product: Product) => {
      this.carInfo = product
      console.log(this.carInfo);
    })
  }

  ngOnInit(): void {
    
  }
}
