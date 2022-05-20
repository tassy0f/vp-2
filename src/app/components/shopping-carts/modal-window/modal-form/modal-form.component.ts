import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {

  constructor(private modalDialogService:ModalDialogService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      SecondName: new FormControl('', Validators.required),
      Name: new FormControl('', Validators.required),
      ThirdName: new FormControl(''),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Phone_number: new FormControl('', Validators.required)
    });
  }
  
  form!: FormGroup

  public closeModalForm() {
    this.modalDialogService.isShowModalForm = false
  }

  onSubmit() {
    console.log('Submited!', this.form);
  }
}