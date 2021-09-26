import express from "express";
import { addcreditinfo, getcreditinfo } from "../controllers/credit.js";
const router = express.Router();

router.post("/", addcreditinfo);
router.get("/:id", getcreditinfo);
export default router;
