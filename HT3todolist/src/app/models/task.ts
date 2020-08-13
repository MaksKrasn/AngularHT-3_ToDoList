export class Task{

    constructor(public id: number, public taskName: string, public description: string, public taskData: string, 
        public beginTime: string, public endTime: string, public isCompleted: boolean){}
        
}