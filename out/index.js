"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var svc = new GithubApiService_1.GithubApiService();
// svc.getUserInfo('fireWinter',(user:User)=>{
//     console.log(user);
//     console.log('name:',user.login);
// });
// svc.getRepos('fireWinter',(repos:Repo[])=>{
//     console.log(repos);
// })
//上面是两个分开写，进行请求。还有的需求的场景是只有得到用户信息才进行仓库的请求
svc.getUserInfo('fireWinter', function (user) {
    console.log(user);
    console.log('name:', user.login);
    svc.getRepos(user.login, function (repos) {
        user.repos = repos;
        console.log(user);
    });
});
