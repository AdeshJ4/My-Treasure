// Embedding Documents Using an array of sub-documents

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect("mongodb://127.0.0.1/playground");
    console.log("Database Connected");
    console.log("Host : ", connect.connection.host);
    console.log("DB Name : ", connect.connection.name);
  } catch (err) {
    console.log("Database not connected");
    console.log(err.message);
  }
};
connectDB();

const authorSchema = new mongoose.Schema({
  authorName: String,
  phone: Number,
  age: Number,
});

const courseSchema = new mongoose.Schema({
  courseName: String,
  authors: {
    type: [authorSchema],
    required: true,
  },
});

const Course = new mongoose.model("Course", courseSchema);

const getAllCourses = async () => {
  try {
    const courses = await Course.find();
    console.log(courses);
  } catch (err) {
    console.log(err.message);
  }
};

const createCourseWithMultipleAuthors = async (courseName, authors) => {
  try {
    const course = await Course.create({
      courseName,
      authors,
    });
    console.log(course);
  } catch (err) {
    console.log(err.message);
  }
};

const addAuthor = async (courseId, author) => {
  try {
    const course = await Course.findById(courseId);
    course.authors.push(author);
    await course.save();
    console.log("Author added successfully");
  } catch (err) {
    console.log(err.message);
  }
};

const removeAuthor = async (courseId, authorId) => {
  try {
    const course = await Course.findById(courseId);
    const author = course.authors.id(authorId);

    console.log('course : ', course);
    console.log('author: ', author);

    author.deleteOne();
    await course.save();
    console.log("Author removed successfully");
  } catch (err) {
    console.log(err.message);
  }
};


// addAuthor('6561757b8860b20bab3e9393', {authorName: "Vinod Thapa", phone: 7784521355, age: 22});
// removeAuthor("6561757b8860b20bab3e9393", "65617c9db6e6e3621bf4e5c7");

// createCourseWithMultipleAuthors('Python Course', [
//     {authorName: 'Mosh hamedani', age: 50, phone: 9527370288},
//     {authorName: 'Code With Harry', age: 30, phone: 7721031355},
// ]);
