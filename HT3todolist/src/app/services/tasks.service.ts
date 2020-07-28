import { Injectable } from '@angular/core';
import {Task} from '../models/Task';

@Injectable()
export class TasksService{
    private tasks: Task[];

}