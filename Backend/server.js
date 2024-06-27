import express from "express";
import cors from "cors";
import { connectDB } from "./cofig/db.js";

//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//mongodb+srv://Wimukthi_Madushan:#WM@b2000#@cluster0.bx7cygb.mongodb.net/?
