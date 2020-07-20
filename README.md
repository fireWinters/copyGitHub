这是一个使用typeScript语言和node.js编写的一个模仿GitHub网站的项目。
获得json文件的地方是https://api.github.com/
例如：
{
  "current_user_url": "https://api.github.com/user",
  "current_user_authorizations_html_url": "https://github.com/settings/connections/applications{/client_id}",
  "authorizations_url": "https://api.github.com/authorizations",
  "code_search_url": "https://api.github.com/search/code?q={query}{&page,per_page,sort,order}",
  "commit_search_url": "https://api.github.com/search/commits?q={query}{&page,per_page,sort,order}",
  "emails_url": "https://api.github.com/user/emails",
  "emojis_url": "https://api.github.com/emojis",
  "events_url": "https://api.github.com/events",
  "feeds_url": "https://api.github.com/feeds",
  "followers_url": "https://api.github.com/user/followers",
  "following_url": "https://api.github.com/user/following{/target}",
  "gists_url": "https://api.github.com/gists{/gist_id}",
  "hub_url": "https://api.github.com/hub",
  "issue_search_url": "https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}",
  "issues_url": "https://api.github.com/issues",
  "keys_url": "https://api.github.com/user/keys",
  "label_search_url": "https://api.github.com/search/labels?q={query}&repository_id={repository_id}{&page,per_page}",
  "notifications_url": "https://api.github.com/notifications",
  "organization_url": "https://api.github.com/orgs/{org}",
  "organization_repositories_url": "https://api.github.com/orgs/{org}/repos{?type,page,per_page,sort}",
  "organization_teams_url": "https://api.github.com/orgs/{org}/teams",
  "public_gists_url": "https://api.github.com/gists/public",
  "rate_limit_url": "https://api.github.com/rate_limit",
  "repository_url": "https://api.github.com/repos/{owner}/{repo}",
  "repository_search_url": "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}",
  "current_user_repositories_url": "https://api.github.com/user/repos{?type,page,per_page,sort}",
  "starred_url": "https://api.github.com/user/starred{/owner}{/repo}",
  "starred_gists_url": "https://api.github.com/gists/starred",
  "user_url": "https://api.github.com/users/{user}",
  "user_organizations_url": "https://api.github.com/user/orgs",
  "user_repositories_url": "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",
  "user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
}
获得json文件的地方是https://api.github.com/users/fireWinters
例如：
{
  "login": "fireWinters",
  "id": 42629623,
  "node_id": "MDQ6VXNlcjQyNjI5NjIz",
  "avatar_url": "https://avatars1.githubusercontent.com/u/42629623?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/fireWinters",
  "html_url": "https://github.com/fireWinters",
  "followers_url": "https://api.github.com/users/fireWinters/followers",
  "following_url": "https://api.github.com/users/fireWinters/following{/other_user}",
  "gists_url": "https://api.github.com/users/fireWinters/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/fireWinters/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/fireWinters/subscriptions",
  "organizations_url": "https://api.github.com/users/fireWinters/orgs",
  "repos_url": "https://api.github.com/users/fireWinters/repos",
  "events_url": "https://api.github.com/users/fireWinters/events{/privacy}",
  "received_events_url": "https://api.github.com/users/fireWinters/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 22,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2018-08-23T02:34:45Z",
  "updated_at": "2020-07-17T05:58:04Z"
}

npm init 初始化项目，生成package.json文件
在目录区域空白地方右击鼠标，选择打开在终端，执行命令tsc --init，初始化ts的json文件
安装请求API的库，例axios,或者request， npm install @types/request --save-dev,
npm install request --save

执行npm start 报错，需要增加请求头信息，具体代码是
headers: {
        'User-Agent': 'request'
    }
增加后请求对应的API地址即不报错
使用插件格式化输出的json

解决定义user类如下书写报错问题，一按照提示写构造函数，一种是修改tsconfig.json文件中"strictPropertyInitialization": false, 
export class User{
    login:string;
    fullName:string;
    repoCount:number;
    followerCount:number;
}