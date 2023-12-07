// referencing documents and populate method

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect("mongodb://127.0.0.1/playGround");
    console.log("Database is connected");
    console.log("Host : ", connect.connection.host);
    console.log("Name: ", connect.connection.name);
  } catch (err) {
    console.log("Database is not connected");
    console.log("Error: ", err.message);
    process.exit(1);
  }
};
connectDB();

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
  })
);

const Author = mongoose.model(
  "Author",
  new mongoose.Schema({
    name: String,
    bio: String,
    website: String,
  })
);

async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website,
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, author) {
  const course = new Course({
    name,
    author,
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course
    .find()
    .populate('author')
    // .populate("author", "name -_id");
  // .select({ name: 1, author: 1, category: 1, _id: 0 });
  console.log(courses);
}

// createAuthor('Mosh', 'My bio', 'My Website');

// createCourse('Node Course', '6560a5b7c3c6fafcfa2b52cf');

listCourses();
