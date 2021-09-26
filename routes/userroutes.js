import express from "express";
import { addnewuser, checkuserdetails } from "../controllers/user.js";
const router = express.Router();

router.post("/", addnewuser);
router.post("/check", checkuserdetails);
export default router;
