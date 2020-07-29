export class Task{
    id: number;
    taskName: string = '';
    description: string = '';
    taskData: string = '';
    beginTime: string = '';
    endTime: string = '';
    isCompleted: boolean = false;

    constructor(id: number, taskName: string, description: string, taskData: string, beginTime: string, endTime: string, isCompleted: boolean){
        this.id = id;
        this.taskName = taskName;
        this.description = description;
        this.taskData = taskData;
        this.beginTime = beginTime;
        this.endTime = endTime;
        this.isCompleted = isCompleted;
    }
}