console.log('Before');
getUser(101, (res1)=>{
    getRepositories(res1.gitHubUsername, (res2)=>{
        getCommits(res2[0], (res3)=>{
            console.log(res3);
        })
    })
});
console.log('After');


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



