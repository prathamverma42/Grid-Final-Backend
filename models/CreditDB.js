import mongoose from "mongoose";

const CreditformSchema = mongoose.Schema({
  name: {
    type: String,
  },
  contact: {
    type: Number,
  },
  dob: {
    type: String,
  },
  pancard: {
    type: String,
  },
  credittype: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const CreditDB = mongoose.model("CreditDB", CreditformSchema);

export default CreditDB;
