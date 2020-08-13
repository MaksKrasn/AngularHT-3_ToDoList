import { Component, Output, EventEmitter, Input, ViewChild, TemplateRef } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
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
    isEdit: boolean = false;
    timeRegex = /\d{2}:\d{2}$/;
    dataRegex = /\d{2}.\d{2}.\d{4}$/;

    constructor(public tasksService: TasksService, public modalRef: MDBModalRef) {
      
    }

    ngOnInit() {
      this.viewForm = new FormGroup({
        viewFormTaskName: new FormControl((this.selectedTask != null)? this.selectedTask.taskName:'', Validators.required),
        viewFormTaskData: new FormControl((this.selectedTask != null)? this.selectedTask.taskData:'', [Validators.required,  Validators.pattern(this.dataRegex)]),
        viewFormDescription: new FormControl((this.selectedTask != null)? this.selectedTask.description:'', Validators.required),
        viewFormBeginTime: new FormControl((this.selectedTask != null)? this.selectedTask.beginTime:'', [Validators.required,  Validators.pattern(this.timeRegex)]),
        viewFormEndTime: new FormControl((this.selectedTask != null)? this.selectedTask.endTime:'', [Validators.required,  Validators.pattern(this.timeRegex)])
      });
      if(this.selectedTask != null) this.isEdit = true;
    }

    get viewFormTaskName() { return this.viewForm.get('viewFormTaskName'); }

    get viewFormTaskData() { return this.viewForm.get('viewFormTaskData'); }

    get viewFormDescription() { return this.viewForm.get('viewFormDescription'); }

    get viewFormBeginTime() { return this.viewForm.get('viewFormBeginTime'); }

    get viewFormEndTime() { return this.viewForm.get('viewFormEndTime'); }

    onClickSave(){
      if(this.selectedTask == null){
        let addTask: Task = new Task(0, this.viewFormTaskName.value, this.viewFormDescription.value, 
          this.viewFormTaskData.value, this.viewFormBeginTime.value, this.viewFormEndTime.value, false);
        this.tasksService.addTask(addTask);
        
      }
      else{
        this.selectedTask.taskName = this.viewFormTaskName.value;
        this.selectedTask.description = this.viewFormDescription.value;
        this.selectedTask.taskData = this.viewFormTaskData.value;
        this.selectedTask.beginTime = this.viewFormBeginTime.value;
        this.selectedTask.endTime = this.viewFormEndTime.value;
      }
      this.modalRef.hide();
    }

    onClickRemove(){
      this.modalRef.hide();
      if(this.selectedTask != null){
        this.tasksService.removeTask(this.selectedTask.id);
      }
    }
}