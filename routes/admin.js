import express from "express";
import auth from "../middlewares/auth.js";
import { signin } from "../controller/admin.js";


const router = express.Router();

router.post("/signin", signin);



export default router; 