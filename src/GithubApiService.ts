import * as request from 'request';
class GithubApiService{
    //https://api.github.com/users/fireWinter
    getUserInfo(useName:string){
        request
        .get('https://api.github.com/users/'+ useName,(error:any,response:any,body:any) =>{
            console.log(body)
        })
    }
}