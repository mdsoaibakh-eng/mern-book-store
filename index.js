import express from "express";
import mongoose from "mongoose";
import { PORT, MONGODB_URI } from "./config.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

// Mount routes
app.use("/api/books", booksRoute);

// MongoDB connect
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB error:", error);
  });
