console.log("Before");
getUser(101)
    .then((user)=>getRepositories(user.gitHubUsername))
    .then((repos) => getCommits(repos[0]))
    .then((commits)=> console.log(commits))
    .catch((err)=>console.log(err.message))
console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching User from Database...");
      resolve({ id: id, gitHubUsername: "AdeshJ4" });
    }, 2000);
  });
}

function getRepositories(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching repos from Database for user ${userName}...`);
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repoName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching commits from Database for repo ${repoName}...`);
      resolve(["commit1", "commit2", "commit3"]);
    }, 2000);
  });
}
