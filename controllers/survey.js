import SurveyDB from "../models/SurveyDB.js";

export const surveyinfo = async (req, res) => {
  const info = await SurveyDB.create(req.body);
  res.status(200).send({ data: info });
};
