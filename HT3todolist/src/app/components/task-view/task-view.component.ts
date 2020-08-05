import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'task-view',
  templateUrl: './task-view.component.html',
  //styleUrls: ['./task-view.component.css']
})

export class TaskViewComponent{
    viewForm: FormGroup;

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