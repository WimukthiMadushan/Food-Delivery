import express from "express";
import { addFood } from "./../controlers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    // Changed `res` to `file` in filename callback
    cb(null, `${Date.now()}-${file.originalname}`); // Added dash for clarity
  },
});

const upload = multer({ storage });

foodRouter.post("/add", upload.single("image"), addFood);

export default foodRouter;
