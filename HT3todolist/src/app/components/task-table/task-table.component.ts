import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

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

  elements = [];
  headElements = ['ID', 'Task name', 'Description', 'Data', 'Begin time', 'End time', 'Is complieted?', 'Action'];

  constructor(public tasksService: TasksService ) {
    this.elements = tasksService as any;
    console.log(this.elements);
  }

  ngOnInit(): void {
  }

}
