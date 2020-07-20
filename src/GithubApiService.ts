import * as request from 'request';
import { User } from './User';
import { Repo } from './Repo';
const options = {
    headers: {
        'User-Agent': 'request'
    },
    json:true
};
export class GithubApiService{
    //https://api.github.com/users/fireWinter
    getUserInfo(useName:string,cb:(user:User)=>any){
        request
        .get('https://api.github.com/users/'+ useName, options,(error:any,response:any,body:any) => {
            console.log(body);
            let user:User = new User(body);
            cb(user);
        })
    }

    getRepos(useName:string,cb:(repos:Repo[])=>any){
        request
        .get('https://api.github.com/users/'+ useName +'/repos', options,(error:any,response:any,body:any) => {
            let repos:Repo[] = body.map((repo:any)=>new Repo(repo));
            cb(repos);
        })
    }
}