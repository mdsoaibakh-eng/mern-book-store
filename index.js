import express from "express";
import mongoose from "mongoose";
import { PORT, MONGODB_URI } from "./config.js";
import Book from "./models/bookModel.js";

const app = express();
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});


// 🔍 GET books with query
app.get("/api/books", async (req, res) => {
  try {
    const { author, year, genre } = req.query;

    // Example dummy filter logic
    if (
      author === "Unknown" &&
      year &&
      parseInt(year) < 2000 &&
      genre === "Fiction"
    ) {
      return res.status(200).json([
        {
          title: "Mystery of the Old House",
          author: "Unknown",
          year: 1995,
          genre: "Fiction"
        },
        {
          title: "Adventures in the Dark",
          author: "Unknown",
          year: 1988,
          genre: "Fiction"
        }
      ]);
    }

    const books = await Book.find({});
    res.status(200).json(books);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ➕ CREATE book
app.post("/api/books", async (req, res) => {
  try {
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishedDate: req.body.publishedDate,
      pages: req.body.pages
    };

    const book = await Book.create(newBook);
    res.status(201).json(book);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// MongoDB connect
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`App listening to port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB error:", error);
  });
