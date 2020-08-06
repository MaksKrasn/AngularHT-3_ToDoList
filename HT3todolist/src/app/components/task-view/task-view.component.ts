import { Component, Output, EventEmitter, Input, ViewChild, TemplateRef } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
// MDB Angular Free
import { ModalModule, WavesModule, InputsModule, ButtonsModule, MDBModalRef, MDBModalService } from 'angular-bootstrap-md'
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'task-view',
  templateUrl: './task-view.component.html',
  //styleUrls: ['./task-view.component.css']
})

export class TaskViewComponent{
    viewForm: FormGroup;
    selectedTask: Task;

    constructor(public modalRef: MDBModalRef) {}

    ngOnInit() {
      this.viewForm = new FormGroup({
        viewFormTaskName: new FormControl('', Validators.required),
        viewFormTaskData: new FormControl('', Validators.required),
        viewFormDescription: new FormControl('', Validators.required),
        viewFormBeginTime: new FormControl('', Validators.required),
        viewFormEndTime: new FormControl('', Validators.required)
      });
    }

    get viewFormTaskName() { return this.viewForm.get('viewFormTaskName'); }

    get viewFormTaskData() { return this.viewForm.get('viewFormTaskData'); }

    get viewFormDescription() { return this.viewForm.get('viewFormDescription'); }

    get viewFormBeginTime() { return this.viewForm.get('viewFormBeginTime'); }

    get viewFormEndTime() { return this.viewForm.get('viewFormEndTime'); }
}