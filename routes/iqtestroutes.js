import express from "express";
import { iqtestinfo } from "../controllers/iqtest.js";
const router = express.Router();

router.post("/", iqtestinfo);
export default router;
