export class Task{
    Id: number;
    Title: string;
    Completed: boolean;

    constructor(id: number, title: string) {
        this.Id = id;
        this.Title = title;
        this.Completed = false;
    }
}
