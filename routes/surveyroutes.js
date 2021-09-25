import express from "express";
import { surveyinfo } from "../controllers/survey.js";
const router = express.Router();

router.post("/", surveyinfo);
export default router;
