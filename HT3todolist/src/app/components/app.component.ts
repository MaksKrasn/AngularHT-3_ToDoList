import { Component } from '@angular/core';
import { ModalModule, WavesModule, InputsModule, ButtonsModule, MDBModalRef, MDBModalService } from 'angular-bootstrap-md'
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

  constructor(public tasksService: TasksService, private modalService: MDBModalService){}

  onClickElement(id: number){
    this.selectedTask = this.tasksService.viewTask(id);
    console.log(this.selectedTask);
    this.openModal();
  }

  openModal() {
    this.modalRef = this.modalService.show(TaskViewComponent);
  }

  closeModal(){
    this.modalRef.hide();
  }
}
