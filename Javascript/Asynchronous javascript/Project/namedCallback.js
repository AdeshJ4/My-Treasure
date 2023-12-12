console.log("Before");
getUser(101, getRepositories); // object
console.log("After");

function getRepositories(user) {  // object
  getRepositories(user.gitHubUsername, getRepos); // array
}

function getRepos(repos) {  // array
  getCommits(repos[0], displayCommits);
}

function displayCommits(commits) {  // commits
  console.log(commits);
}


function getUser(id, callback){
    setTimeout(()=>{
        console.log('Fetching User from Database...');
        callback({id: id, gitHubUsername: "AdeshJ4"})
    }, 2000);
}

function getRepositories(userName, callback){
    setTimeout(()=>{
        console.log(`Fetching repos from Database for user ${userName}...`);
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

function getCommits(repoName, callback){
    setTimeout(() => {
        console.log(`Fetching commits from Database for repo ${repoName}...`);
        callback(['commit1', 'commit2', 'commit3']);
    }, 2000);
}

