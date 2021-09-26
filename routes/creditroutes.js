import express from "express";
import {
  addcreditinfo,
  getcreditinfo,
  updatecreditinfo,
} from "../controllers/credit.js";
const router = express.Router();

router.post("/:id", addcreditinfo);
router.get("/:id", getcreditinfo);
router.post("/update/:id", updatecreditinfo);
export default router;
