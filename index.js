require('dotenv').load();
const request = require('request');
var github = require('octonode');

var client = github.client(process.env.GITHUB_TOKEN);
var ghrepo = client.repo('crhraphael/GithubAsana');

var prBody = {
    "title": "First PR",
    "body": "Is this real life?!",
    "head": "master",
    "base": "master"
};

ghrepo.pr(prBody, function(res) {
    console.log(res.body);
});