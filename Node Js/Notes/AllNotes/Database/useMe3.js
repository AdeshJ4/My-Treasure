// Embedding Documents.





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
  author: {
    type: authorSchema,
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

const createCourse = async (courseName, author) => {
  try {
    const course = await Course.create({
      courseName,
      author,
    });
    console.log(course);
  } catch (err) {
    console.log(err.message);
  }
};

const updateInnerAuthor = async (courseId, authorObj) => {
  try {
    // update only one document.
    const course = await Course.findByIdAndUpdate(
      courseId,
      {
        $set: {
          "author.authorName": authorObj.authorName,
        },
      },
      { new: true }
    );
    console.log(course);
  } catch (err) {
    console.log(err.message);
  }
};

const getAllCoursesOfMoshAndUpdate = async () => {
  try {
    // get all courses of mosh and update phone.
    const courses = await Course.updateMany(
      { "author.authorName": "Mosh Hamedani" },
      {
        $set: {
          "author.phone": 9587963177,
        },
      }
    );
    console.log(courses);
  } catch (err) {
    console.log(err.message);
  }
};

const getAllCoursesOfMosh = async () => {
  try {
    const courses = await Course.find({ "author.authorName": "Mosh Hamedani" });
    console.log(courses);
  } catch (err) {
    console.log(err.message);
  }
};

// createCourse('Express Js', {authorName: 'Code With Harry', age: 30, phone: 7721031355});

// updateInnerAuthor('6560c071c4bed105b3918e4a', {authorName: 'Mosh Hamedani'})

// getAllCoursesOfMoshAndUpdate();

// getAllCourses()
