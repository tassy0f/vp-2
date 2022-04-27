import { Component, OnInit } from '@angular/core';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {

  constructor(private modalDialogService:ModalDialogService) { }

  ngOnInit(): void {
  }

  public closeModalForm() {
    this.modalDialogService.isShowModalForm = false
  }
}
