require('dotenv').load();
const request = require('request');
const github = require('octonode');
const fs = require('fs');

var client = github.client(process.env.GITHUB_TOKEN);
var ghrepo = client.repo('crhraphael/GithubAsana');
var cwd = process.cwd();

var prBody = {
    "title": "First PR",
    "body": "Is this real life?!",
    "head": "github-integration",
    "base": "master"
};

var headFilePath = `${cwd}/.git/HEAD`;
fs.readFile(headFilePath, function(err, data) {
    if(err) return false;

    const branchName = data.toString().split(':')[1].split('\\')[0].trim()

    var prBody = {
        "title": "Adding branch name recognition",
        "body": "It creates a PR based on the current branch",
        "head": branchName,
        "base": "master"
    };
    ghrepo.pr(prBody, function(res) {
        console.log(res);
    });
})