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
}