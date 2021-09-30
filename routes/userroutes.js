import express from "express";
import {
  addnewuser,
  checkuserdetails,
  checkuserinfo,
} from "../controllers/user.js";
const router = express.Router();

router.post("/", addnewuser);
router.post("/check", checkuserdetails);
router.post("/checkuser", checkuserinfo);
export default router;
