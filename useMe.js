function fetchData() {
    return new Promise((resolve, reject) => {
        resolve({ id: 101, name: 'Adesh' })
    });
}



fetchData()
    .then((data) => console.log(data)
    )
    .catch((error) => console.log(error.message))


























































































// function getUser(id, callback) {
//     console.log(`getting user ${id}`);

//     setTimeout(() => {
//         callback({ id: 101, github_name: 'AdeshJ4' });
//     }, 2000);
// }
// function handleUserData(userData) {
//     getRepos(userData.id, handleReps)
// }

// function getRepos(userId, callback) {
//     console.log('getting repos for ', userId);

//     setTimeout(() => {
//         callback(["repo_1", "repo_2"]);
//     }, 2000)
// }

// function handleReps(repos) {
//     getCommits(repos[1], handleCOmmitsData)
// }

// function getCommits(repo, callback) {
//     console.log(`getting commits for ${repo}`);

//     setTimeout(() => {
//         callback(['commit_1', 'commit_2', 'commit_3'])
//     }, 2000);
// }

// function handleCOmmitsData(commits) {
//     console.log(commits);
// }

// getUser(101, handleUserData);