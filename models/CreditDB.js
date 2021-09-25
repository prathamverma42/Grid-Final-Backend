import mongoose from "mongoose";

const CreditformSchema = mongoose.Schema({
  name: {
    type: String,
  },
  contact: {
    type: Number,
  },
  pancard: {
    type: String,
  },
});

const CreditDB = mongoose.model("CreditDB", CreditformSchema);

export default CreditDB;
