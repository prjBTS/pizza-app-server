import express from "express";
import { getItems } from "../controller/item.js";

const router = express.Router();

router.get("/all-item", getItems)

export default router;