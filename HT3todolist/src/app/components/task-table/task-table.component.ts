import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {

  /*elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];*/

  elements: Task[];
  headElements = ['ID', 'Task name', 'Description', 'Data', 'Begin time', 'End time', 'State'];

  constructor(public tasksService: TasksService ) {
    this.elements = tasksService.getTasks();
    console.log(this.elements);
  }

  onClickEl(id: number){
    console.log('click task' + id);
  }

  onChangeState(id: number){
    let task: Task = this.tasksService.viewTask(id);
    task.isCompleted? task.isCompleted = false: task.isCompleted = true;
    console.log('task ' + id + ' ' + task.isCompleted);
    console.log(this.tasksService);
  }

  ngOnInit(): void {
  }

}
