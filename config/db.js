const mongoose = require("mongoose");

require("dotenv").config();
const mongoURI = process.env.MONGO_URI;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(mongoURI, options);
    console.log("############################################");
    console.log("------------ MongoDB Connected -------------");
    console.log(`-- ${connection.host} --`);
    console.log("############################################");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
