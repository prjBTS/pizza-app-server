import express from "express";
import { signin, signup } from "../controller/user.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);

export default router;