import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "./../controlers/foodController.js";
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
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
