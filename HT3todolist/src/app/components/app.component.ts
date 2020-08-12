import { Component } from '@angular/core';
import { ModalModule, WavesModule, InputsModule, ButtonsModule, MDBModalRef, MDBModalService, ModalOptions } from 'angular-bootstrap-md'
import { TaskViewComponent } from './task-view/task-view.component'
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/Task';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HT3todolist';
  selectedTask: Task;

  modalRef: MDBModalRef;
  modalOptions = new ModalOptions();

  

  constructor(public tasksService: TasksService, private modalService: MDBModalService){}

  onClickElement(id: number){
    this.selectedTask = this.tasksService.viewTask(id);
    console.log(this.selectedTask);
    this.modalOptions = {
      data:{
        selectedTask: this.selectedTask
      }
    }
    this.openModal();
  }

  onCLickNewTask(){
    this.modalRef = this.modalService.show(TaskViewComponent);
  }

  openModal() {
    this.modalRef = this.modalService.show(TaskViewComponent, this.modalOptions);
  }

  
}
