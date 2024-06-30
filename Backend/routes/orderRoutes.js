import express from "express";
import authMiddleware from "./../middleware/auth.js";
import {
  listOrders,
  placeOrder,
  updateStatus,
  userOrders,
  verifyOrder,
} from "./../controlers/orderController.js";

const router = express.Router();

router.get("/list", listOrders);
router.post("/userorders", authMiddleware, userOrders);
router.post("/place", authMiddleware, placeOrder);
router.post("/status", updateStatus);
router.post("/verify", verifyOrder);

export default router;
