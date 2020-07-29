import { Injectable } from '@angular/core';
import {Task} from '../models/Task';

@Injectable()
export class TasksService{
    private tasks: Task[];

    constructor(){
        this.tasks = [new Task(1, 'Task1', 'Description1', '20.07.2020', '12:00','12:45', true), 
        new Task(2, 'Task2', 'Description2', '22.07.2020', '10:00', '12:45',false),
        new Task(3, 'Task3', 'Description3', '25.07.2020', '15:15', '16:45', false)];
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }

    removeTask(id: number){
        let idx: number = this.tasks.findIndex(t => t.id == id);
        this.tasks.splice(idx, 1);
    }

    editTask(id: number, task: Task){
        let idx: number = this.tasks.findIndex(t => t.id == id);
        this.tasks[idx] = task;
    }

    viewTask(id: number): Task{
        let idx: number = this.tasks.findIndex(t => t.id == id);
        return this.tasks[idx];
    }

    getTasks() {
        return this.tasks;
    }

}