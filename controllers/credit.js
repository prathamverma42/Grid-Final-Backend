// including the Modal of Credit Database
import CreditDB from "../models/CreditDB.js";

// this is to add new credit details at the backend
export const addcreditinfo = async (req, res) => {
  req.body.user = req.params.id;
  const info = await CreditDB.create(req.body);
  res.status(201).send({ data: info });
};

// this is to get the credit details from the backend
export const getcreditinfo = async (req, res) => {
  const info = await CreditDB.find({ user: req.params.id });
  res.status(200).send({ data: info });
};

export const updatecreditinfo = async (req, res) => {
  const creditinfo = await CreditDB.find({ user: req.params.id });
  const id = creditinfo[0]._id;
  const info = await CreditDB.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).send({ data: info });
};
