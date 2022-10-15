import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.static("server"));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

import usersRouter from "./routes/users.js";
import cardsRouter from "./routes/cards.js";
app.use("/users", usersRouter);
app.use("/cards", cardsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
