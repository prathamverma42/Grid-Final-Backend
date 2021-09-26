import express from "express";
import { surveyinfo } from "../controllers/survey.js";
const router = express.Router();

router.post("/:id", surveyinfo);
export default router;
