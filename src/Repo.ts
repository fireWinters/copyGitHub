export class Repo{
    name:string;
    url:string;
    forks_count:number;
    size:number;
    constructor(repo:any){
        this.name=repo.name;
        this.url=repo.url;
        this.forks_count=repo.forks_count;
        this.size=repo.size;
    }
}