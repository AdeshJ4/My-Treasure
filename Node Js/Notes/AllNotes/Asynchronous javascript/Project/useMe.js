console.log('Start');
getUser(101, displayUser);
console.log('End');

// main functions
function getUser(id, callback){
    setTimeout(()=>{
        console.log('Fetching Data from Database');
        callback({id: id, gitHubUsername: "AdeshJ4"})
    }, 2000);
}

function getRepositories (user, callback){
    setTimeout(()=>{
        console.log(`Fetching repos from Database for user ${user.gitHubUsername}...`);
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000);
}

function getCommits (repos, callback){
    setTimeout(()=>{
        console.log("Fetching Commits from repo 1");
        callback(['commit1', "commit2", "commit3"])
    }, 2000);
}


// callback functions
function displayUser(user){
    getRepositories(user, displayRepos)
}

function displayRepos (repos){
    getCommits(repos, displayCommits)
}

function displayCommits(commit){
    console.log(commit);
}

