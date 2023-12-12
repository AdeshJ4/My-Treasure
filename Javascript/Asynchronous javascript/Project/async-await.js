console.log("Before");
displayCommits();
console.log("After");

async function displayCommits() {
  try {
    const user = await getUser(101);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log(err.message);
  }
}

const getContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
};

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
    //   resolve(["commit1", "commit2", "commit3"]);
    reject(new Error("Could not get repos..."))
    }, 2000);
  });
}
