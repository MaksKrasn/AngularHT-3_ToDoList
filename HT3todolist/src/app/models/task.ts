export class Task{
    id: number;
    taskName: string = '';
    description: string = '';
    beginData: string = '';
    endData: string = '';
    isCompleted: boolean = false;

    constructor(id: number, taskName: string, description: string, beginData: string, endData: string, isCompleted: boolean){
        this.id = id;
        this.taskName = taskName;
        this.description = description;
        this.beginData = beginData;
        this.endData = endData;
        this.isCompleted = isCompleted;
    }
}