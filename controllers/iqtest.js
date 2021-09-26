// including the Modal of IqTest Database
import IqTestDB from "../models/IqTestDB.js";

// this is to add new iq details at the backend
export const iqtestinfo = async (req, res) => {
  req.body.user = req.params.id;
  const info = await IqTestDB.create(req.body);
  res.status(200).send({ data: info });
};
