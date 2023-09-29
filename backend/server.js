import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5000;

import connectDB from "../config/db.js";
import userRoutes from "./routes/userRoutes.js";

connectDB();

const app = express();
app.use(express.json()); //accept json data
app.use(express.urlencoded({ extended: true })); //send form data

app.use("/api/users", userRoutes);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
