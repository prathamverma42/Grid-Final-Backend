import express from "express";
import {
  addcreditinfo,
  getcreditinfo,
  updatecreditinfo,
  // checkuserinfo,
} from "../controllers/credit.js";
const router = express.Router();

// router.post("/checkuser", checkuserinfo);
router.post("/update/:id", updatecreditinfo);
router.post("/:id", addcreditinfo);
router.get("/:id", getcreditinfo);
export default router;
