"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repo = void 0;
var Repo = /** @class */ (function () {
    function Repo(repo) {
        this.name = repo.name;
        this.url = repo.url;
        this.forks_count = repo.forks_count;
        this.size = repo.size;
    }
    return Repo;
}());
exports.Repo = Repo;
