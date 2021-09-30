// including the Modal of User Database
import UserDB from "../models/userDB.js";

export const checkuserdetails = async (req, res) => {
  // console.log(req.body);
  const email = req.body.email;
  const stored_password = await UserDB.findOne({ email }).select("+password");
  // console.log(stored_password);
  if (stored_password === null) {
    res.status(200).send({ status: false, data: null });
    return;
  }
  var password_match = await stored_password.checkpwd(req.body.password);
  if (password_match) {
    res.status(200).send({ status: true, data: stored_password });
  } else {
    res.status(200).send({ status: false, data: null });
  }
};

// this is to add new survey details at the backend
export const addnewuser = async (req, res) => {
  const info = await UserDB.create(req.body);
  res.status(201).send({ data: info });
};

export const checkuserinfo = async (req, res) => {
  // console.log(req.body.email);
  const user = await UserDB.find({
    email: req.body.email,
  });
  // console.log(user);
  if (user.length !== 0) {
    res.status(200).json({ success: false });
  } else {
    res.status(200).json({ success: true });
  }
};
