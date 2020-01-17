const mongoose = require("mongoose");

const Place = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "lists"
  },
  name: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  address: {
    type: String,
    require: true
  },
  coordinates: {
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    }
  },
  yelpId: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Place", Place);

/*
  Name
  Photo
  Location: city, state, country
  Coordinates: latitude, longitude
  Yelp ID
*/
