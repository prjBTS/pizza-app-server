import express from "express";
import auth from "../middlewares/auth.js"
import { deleteUserOrder, getUserOrder, setUserOrder } from "../controller/order.js";

const router = express.Router();

router.get("/order", auth, getUserOrder);
router.post("/order", auth, setUserOrder);
router.delete("/order", auth, deleteUserOrder);

export default router;