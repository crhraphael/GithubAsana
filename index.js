require('dotenv').load();
const request = require('request');
const github = require('octonode');
const fs = require('fs');

var client = github.client(process.env.GITHUB_TOKEN);
var ghrepo = client.repo('crhraphael/gitbasan');
var cwd = process.cwd();

var prBody = {
    "title": "First PR",
    "body": "Is this real life?!",
    "head": "github-integration",
    "base": "master"
};

var headFilePath = `${cwd}/.git/HEAD`;
if(!fs.existsSync(headFilePath)) {
    throw new Error(`O CLI não encontrou as configurações do repositório neste diretório.`);
}
var configFilePath = `${cwd}/.git/config`;
if(!fs.existsSync(configFilePath)) {
    throw new Error(`O CLI não encontrou as configurações do repositório neste diretório.`);
}

let headFile = fs.readFileSync(headFilePath);
const branchName = headFile.toString().split(':')[1].split('\\')[0].trim()

let configFile = fs.readFileSync(configFilePath).toString();
const repoName = configFile.match(/url\ =\ (.*)\n/gm)[0].trim().split(':')[1]
console.log(repoName);

    var prBody = {
        "title": "Adding branch name recognition",
        "body": "It creates a PR based on the current branch",
        "head": branchName,
        "base": "master"
    };


    // ghrepo.pr(prBody, function(res) {
    //     console.log(res);
    // });