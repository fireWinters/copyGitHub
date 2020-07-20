import * as request from 'request';
import { User } from './User';
const options = {
    headers: {
        'User-Agent': 'request'
    },
    json:true
};
export class GithubApiService{
    //https://api.github.com/users/fireWinter
    getUserInfo(useName:string){
        request
        .get('https://api.github.com/users/'+ useName, options,(error:any,response:any,body:any) => {
            console.log(body);
            let user:User = new User(body);
            console.log(user);
        })
    }
}