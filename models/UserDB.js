import mongoose from "mongoose";
import bcrypt from "bcrypt";
const saltRounds = 10;

const UserDetailsSchema = mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

UserDetailsSchema.pre("save", async function (next) {
  try {
    const hash = await bcrypt.hash(this.password, saltRounds);
    this.password = hash;
  } catch (error) {
    next(error);
  }
});

UserDetailsSchema.methods.checkpwd = async function (enteredPassword) {
  // console.log(this.password);
  // console.log(enteredPassword);
  return await bcrypt.compare(enteredPassword, this.password);
};
const UserDB = mongoose.model("UserDB", UserDetailsSchema);

export default UserDB;
