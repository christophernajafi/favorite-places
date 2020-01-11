const mongoose = require("mongoose");

const ListSchema = mongoose.Schema({
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

module.exports = mongoose.model("list", ListSchema);

/*
	User
	Title
	Place, an array
	*/
