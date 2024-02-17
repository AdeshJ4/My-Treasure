function getUser(id, callback) {
  setTimeout(() => {
    console.log(`Getting User from database with id ${id}`);
    callback({ id: 101, githubUserName: "AdeshJ4", age: 22 });
  }, 1000);
}

function getRepos({ githubUserName }, callback) {
  setTimeout(() => {
    console.log(`Getting repos of user ${githubUserName}`);
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log(`Getting COmmits from ${repo}`);
    callback(["commit 1", "commit 2", "Commit 3"]);
  }, 4000);
}



