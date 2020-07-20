import * as request from 'request';
const options = {
    headers: {
        'User-Agent': 'request'
    }
};
export class GithubApiService{
    //https://api.github.com/users/fireWinter
    getUserInfo(useName:string){
        request
        .get('https://api.github.com/users/'+ useName,options,(error:any,response:any,body:any) =>{
            console.log(body)
        })
    }
}