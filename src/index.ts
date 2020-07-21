import { GithubApiService} from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';
let svc:GithubApiService = new GithubApiService ();
// svc.getUserInfo('fireWinter',(user:User)=>{
//     console.log(user);
//     console.log('name:',user.login);
// });
// svc.getRepos('fireWinter',(repos:Repo[])=>{
//     console.log(repos);
// })
//上面是两个分开写，进行请求。还有的需求的场景是只有得到用户信息才进行仓库的请求
svc.getUserInfo('fireWinter',(user:User)=>{
    console.log(user);
    console.log('name:',user.login);
    svc.getRepos(user.login,(repos:Repo[])=>{
        user.repos = repos;
        console.log(user);
    })
});

