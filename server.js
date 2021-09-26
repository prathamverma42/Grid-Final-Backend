// including dependencies
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

//Route files
import Credit from "./routes/creditroutes.js";
import Survey from "./routes/surveyroutes.js";
import IqTest from "./routes/iqtestroutes.js";

//Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(cors());
app.use(express.json());

//Mount routers
app.use("/credit", Credit);
app.use("/survey", Survey);
app.use("/iqtest", IqTest);

// Assigning Port Number
const PORT = process.env.PORT || 5000;

// Connecting to DataBase
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(
    app.listen(PORT),
    console.log(`Server started running at PORT ${PORT}`)
  );
