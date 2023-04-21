import mongoose from "mongoose";
import { MONGODB_URI } from "../config/config.js";

export default async function connectDb() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error connecting to Database");
    console.log(error.message);
    process.exit(1);
  }
}
