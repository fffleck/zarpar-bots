import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDatabase = () => {
  mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`,
    { dbName: process.env.MONGODB_NAME }
  );
};

export default connectDatabase;
