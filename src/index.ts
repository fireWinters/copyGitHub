import { GithubApiService} from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';
import * as _ from 'lodash'
let svc:GithubApiService = new GithubApiService ();
// svc.getUserInfo('fireWinter',(user:User)=>{
//     console.log(user);
//     console.log('name:',user.login);
// });
// svc.getRepos('fireWinter',(repos:Repo[])=>{
//     console.log(repos);
// })
//上面是两个分开写，进行请求。还有的需求的场景是只有得到用户信息才进行仓库的请求
// node.js内置对象
console.log(process.argv);
if (process.argv.length<3) {
    console.log('请输入用户名')
}else{
    svc.getUserInfo('fireWinter',(user:User)=>{
        console.log(user);
        console.log('name:',user.login);
        svc.getRepos(user.login,(repos:Repo[])=>{
            // let sortedRepos = _.sortBy(repos,[(repo:Repo)=>repo.size]);//正序
            let sortedRepos = _.sortBy(repos,[(repo:Repo)=>repo.size*-1]);//倒序
            user.repos = sortedRepos;
            console.log(user);
        })
    });
}


