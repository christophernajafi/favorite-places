const mongoose = require("mongoose");

const PlaceSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
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
  location: {
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
  }
});

module.exports = mongoose.model("place", PlaceSchema);

/*
  Name
  Photo
  Location: city, state, country
  Coordinates: latitude, longitude
  Yelp ID
*/
