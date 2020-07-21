"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var _ = __importStar(require("lodash"));
var svc = new GithubApiService_1.GithubApiService();
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
svc.getUserInfo('fireWinter', function (user) {
    console.log(user);
    console.log('name:', user.login);
    svc.getRepos(user.login, function (repos) {
        // let sortedRepos = _.sortBy(repos,[(repo:Repo)=>repo.size]);//正序
        var sortedRepos = _.sortBy(repos, [function (repo) { return repo.size * -1; }]); //倒序
        user.repos = sortedRepos;
        console.log(user);
    });
});
