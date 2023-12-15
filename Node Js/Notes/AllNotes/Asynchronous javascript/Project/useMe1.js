console.log('start');
getUser(101, (user)=>{  // user obj is passed to getRepositories
    getRepositories(user, (repos)=>{ // repos arr is passed to getRepositories
        getCommits(repos[0], (commits)=>{ // commits arr is passed to getRepositories
            console.log(commits);
        })
    })
});
console.log('end');



function getUser(id, callback){
    setTimeout(()=>{
        console.log(`Fetching User from database with id ${id}`);
        callback({id: 101, githubName: 'AdeshJ'});
    }, 2000);
}

function getRepositories({githubName}, callback){
    setTimeout(() => {
        console.log(`Fetching Repos for user ${githubName}`);
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

function getCommits(repo, callback){
    setTimeout(() => {
        console.log(`Fetching Commits for ${repo}`);
        callback(['commit1', 'commit2', 'commit3'])
    }, 2000);
}