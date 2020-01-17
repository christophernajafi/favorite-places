const express = require("express");
const router = express.Router();

const Place = require("../models/Place");

// get all places in a list
router.get("/", async (req, res) => {
  try {
    console.log("GET ALL PLACES");
    const places = await Place.find({ list: req.list.id }).sort({
      date: -1
    });
    res.json(places);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// future route for mobile app
// get all places belonging to a user within a mile radius

// create a single place
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  try {
    console.log("CREATE A SINGLE PLACE");

    const newPlace = await new Place({ title, description, user: req.user.id });

    console.log("newPlace: ", newPlace);

    const place = await newPlace.save();

    res.json(place);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
    // return next(err);
  }
});

// delete a single place
router.delete("/:id", async (req, res) => {
  try {
    console.log("GET A SINGLE PLACE");

    await Place.findByIdAndRemove(req.params.id);
    res.json({ msg: "Place removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
