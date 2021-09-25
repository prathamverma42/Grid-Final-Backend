import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import CreditForm from "./models/Creditform";
import Credit from "./routes/creditroutes.js";
import Survey from "./routes/surveyroutes.js";
import IqTest from "./routes/iqtestroutes.js";

dotenv.config({ path: "./config/config.env" });

const app = express();
app.use(cors());
app.use(express.json());
app.use("/credit", Credit);
app.use("/survey", Survey);
app.use("/iqtest", IqTest);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    // useFindAndModify: false,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(
    app.listen(PORT),
    console.log(`Server started running at PORT ${PORT}`)
  );
