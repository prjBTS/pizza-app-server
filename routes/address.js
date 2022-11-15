import express from "express";
import auth from "../middlewares/auth.js"
import { deleteUserAddress, getUserAddress, setUserAddress } from "../controller/address.js";

const router = express.Router();

router.get("/address", auth, getUserAddress);
router.post("/address", auth, setUserAddress);
router.delete("/address", auth, deleteUserAddress);

export default router;