import mongoose from "mongoose";

const SurveyformSchema = mongoose.Schema({
  rating: {
    type: Number,
  },
  feature: {
    type: String,
  },
  recommendation: {
    type: String,
  },
});

const SurveyDB = mongoose.model("SurveyDB", SurveyformSchema);

export default SurveyDB;
