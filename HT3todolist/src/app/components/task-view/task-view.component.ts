import { Component, Output, EventEmitter, Input, ViewChild, TemplateRef } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
// MDB Angular Free
import { ModalModule, WavesModule, InputsModule, ButtonsModule, MDBModalRef, MDBModalService } from 'angular-bootstrap-md'

@Component({
  selector: 'task-view',
  templateUrl: './task-view.component.html',
  //styleUrls: ['./task-view.component.css']
})

export class TaskViewComponent{
    viewForm: FormGroup;

    constructor(public modalRef: MDBModalRef) {}

    ngOnInit() {
      this.viewForm = new FormGroup({
        contactFormModalName: new FormControl('', Validators.required),
        contactFormModalEmail: new FormControl('', Validators.email),
        contactFormModalSubject: new FormControl('', Validators.required),
        contactFormModalMessage: new FormControl('', Validators.required)
      });
    }

    get contactFormModalName() {
        return this.viewForm.get('contactFormModalName');
    }
    
    get contactFormModalEmail() {
        return this.viewForm.get('contactFormModalEmail');
    }
    
    get contactFormModalSubject() {
        return this.viewForm.get('contactFormModalSubject');
    }
    
    get contactFormModalMessage() {
        return this.viewForm.get('contactFormModalMessage');
    }

}