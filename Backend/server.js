import express from "express";
import cors from "cors";
import { connectDB } from "./cofig/db.js";
import foodRouter from "./routes/foodRoute.js";

//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api routes
app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
