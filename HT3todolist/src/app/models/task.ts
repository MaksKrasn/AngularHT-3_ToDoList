export class Task{
    /*id: number;
    taskName: string = '';
    description: string = '';
    taskData: string = '';
    beginTime: string = '';
    endTime: string = '';
    isCompleted: boolean = false;*/

    constructor(public id: number, public taskName: string, public description: string, public taskData: string, 
        public beginTime: string, public endTime: string, public isCompleted: boolean){}
}