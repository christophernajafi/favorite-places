const mongoose = require("mongoose");

const List = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    require: true
  },
  places: []
});

module.exports = mongoose.model("List", List);
