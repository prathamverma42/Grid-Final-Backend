import mongoose from "mongoose";

const IqTestSchema = mongoose.Schema({
  q1: {
    type: Number,
  },
  q2: {
    type: String,
  },
  q3: {
    type: String,
  },
  score: {
    type: Number,
  },
});

const IqTestDB = mongoose.model("IqTestDB", IqTestSchema);

export default IqTestDB;
