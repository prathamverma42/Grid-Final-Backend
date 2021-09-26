import mongoose from "mongoose";

const IqTestSchema = mongoose.Schema({
  q1: {
    type: String,
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
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const IqTestDB = mongoose.model("IqTestDB", IqTestSchema);

export default IqTestDB;
