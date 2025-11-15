import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());

// Default Route
app.get("/", (req, res) => {
  res.send("Sweet Shop  is running...");
});

// Connect to Database
connectDB();

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
