import { GithubApiService} from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';
let svc:GithubApiService = new GithubApiService ();
svc.getUserInfo('fireWinter',(user:User)=>{
    console.log(user);
    console.log('name:',user.login);
});
svc.getRepos('fireWinter',(repos:Repo[])=>{
    console.log(repos);
})