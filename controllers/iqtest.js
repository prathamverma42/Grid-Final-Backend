import IqTestDB from "../models/IqTestDB.js";

export const iqtestinfo = async (req, res) => {
  const info = await IqTestDB.create(req.body);
  res.status(200).send({ data: info });
};
