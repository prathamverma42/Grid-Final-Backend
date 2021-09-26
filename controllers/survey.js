// including the Modal of Survey Database
import SurveyDB from "../models/SurveyDB.js";

// this is to add new survey details at the backend
export const surveyinfo = async (req, res) => {
  const info = await SurveyDB.create(req.body);
  res.status(200).send({ data: info });
};
