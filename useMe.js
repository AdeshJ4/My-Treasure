// Install dependencies: npm install express @apollo/server graphql mongoose cors dotenv

const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Define Movie Model
const Movie = mongoose.model("Movie", {
  title: String,
  director: String,
  releaseYear: Number,
});

// Define GraphQL Schema
const typeDefs = `#graphql
  type Movie {
    id: ID!
    title: String!
    director: String!
    releaseYear: Int!
  }

  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
  }

  type Mutation {
    addMovie(title: String!, director: String!, releaseYear: Int!): Movie
    updateMovie(id: ID!, title: String, director: String, releaseYear: Int): Movie
    deleteMovie(id: ID!): String
  }
`;

// Define Resolvers
const resolvers = {
  Query: {
    movies: async () => await Movie.find(),
    movie: async (_, { id }) => await Movie.findById(id),
  },
  Mutation: {
    addMovie: async (_, { title, director, releaseYear }) => {
      const movie = new Movie({ title, director, releaseYear });
      return await movie.save();
    },
    updateMovie: async (_, { id, title, director, releaseYear }) => {
      return await Movie.findByIdAndUpdate(
        id,
        { title, director, releaseYear },
        { new: true }
      );
    },
    deleteMovie: async (_, { id }) => {
      await Movie.findByIdAndDelete(id);
      return "Movie deleted successfully";
    },
  },
};

// Start Apollo Server
const app = express();
app.use(cors());
app.use(bodyParser.json());

const server = new ApolloServer({ typeDefs, resolvers });
async function startServer() {
  await server.start();
  app.use("/graphql", expressMiddleware(server));
  app.listen(4000, () => console.log("Server running on http://localhost:4000/graphql"));
}
startServer();
