const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};

const connectDB = async () => {
  try {
    await mongoose.connect(db, options);
    console.log("############################################");
    console.log("------------ MongoDB Connected -------------");
    console.log("############################################");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
