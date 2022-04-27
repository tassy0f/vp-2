import { OnInit, Component, Input} from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { Product } from '../models/product';
import { YaReadyEvent } from 'angular8-yandex-maps';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';
@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  
  @Input() carInfo:any = [];

  yaLatitude:number = this.randomLatLng(55.905,55.58);
  yaLongitude:number = this.randomLatLng(37.76,37.44)

  constructor(private messageServ:MessageServiceService,public readonly dialogS:ModalDialogService) { } 
  
  ngOnInit() {
    this.messageServ.getMessage().subscribe((product: Product) => {
      this.carInfo = product
    })
  }

  public randomLatLng(from:number,to:number):number {
    return Math.random() * (to - from) + from;
  }

  public closeModal() {
    this.dialogS.isShowDialog = false 
  }

  public openModalForm() {
    this.dialogS.isShowModalForm = true
  }
}
