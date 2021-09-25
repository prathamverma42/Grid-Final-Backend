import express from "express";
import { creditinfo } from "../controllers/credit.js";
const router = express.Router();

router.post("/", creditinfo);
export default router;
