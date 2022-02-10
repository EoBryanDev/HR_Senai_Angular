export class Jobs {
    
        id : number = 0;
        name : string = ""; 
        photo: string = "";
        description: string = "";
        salary: number = 0;
    constructor(id:number,name:string,photo:string,description:string,salary:number){
        this.id = id;
        this.name = name; 
        this.photo = photo;
        this.description = description;
        this.salary = salary;
    }
}