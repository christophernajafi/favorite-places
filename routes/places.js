const express = require("express");
const router = express.Router();

const Place = require("../db/models/Place");

// get all places in a list
router.get("/", async (req, res) => {
  try {
    console.log("GET ALL PLACES");
    const places = await Place.find({ list: req.list.id }).sort({
      date: -1
    });
    res.status(200).json(places);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// get all places belonging to a user within a mile radius
// future route for mobile app

// create a single place
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  try {
    console.log("CREATE A SINGLE PLACE");

    const newPlace = await new Place({ title, description, user: req.user.id });

    console.log("newPlace: ", newPlace);

    const place = await newPlace.save();

    res.status(201).json(place);
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
    res.status(200).json({ msg: "Place removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
