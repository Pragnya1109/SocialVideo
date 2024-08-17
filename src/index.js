// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

// 2nd APPROACH
dotenv.config({
  path: "./env",
});
connectDB();

/*

1st APPROACH


import express from "express";
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error("ERROR", error);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR", error);
    throw err;
  }
})();
*/
