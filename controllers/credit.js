import CreditDB from "../models/CreditDB.js";

export const creditinfo = async (req, res) => {
  const info = await CreditDB.create(req.body);
  res.status(200).send({ data: info });
};
