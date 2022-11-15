import express from "express";
import auth from "../middlewares/auth.js";
import { getPaymentMethod, newPaymentMethod, deletePaymentMethod } from "../controller/payment.js";

const router = express.Router();

router.post("/payment", auth, newPaymentMethod);
router.get("/payment", auth, getPaymentMethod);
router.delete("/payment", auth, deletePaymentMethod)

export default router;