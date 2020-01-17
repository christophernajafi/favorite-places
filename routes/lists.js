const express = require("express");
const router = express.Router();

const List = require("../models/List");

/*
  GET a single list
  Associated with a single user
  Returns an object with
  MongoDB ID
  Name
  Photo
  Location: city, state, country
  Coordinates: latitude, longitude
  Yelp ID
*/

// get all lists
router.get("/", (req, res, next) => {
  console.log("GET ALL LISTS");
});

// get a single list
router.get("/:id", (req, res, next) => {
  console.log("GET A SINGLE LIST");
});

// create a single list
router.post("/", async (req, res, next) => {
  const { title, description } = req.body;
  try {
    console.log("CREATE A SINGLE LIST");

    let newList = await new List({ title, description, user: req.user.id });

    console.log("newList: ", newList);

    const list = await newList.save();

    res.json(list);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
    // return next(err);
  }
});

// update a single list
router.put("/", (req, res, next) => {
  console.log("UPDATE A SINGLE LIST");
});

// delete a single list
router.delete("/", (req, res, next) => {
  console.log("DELETE A SINGLE LIST");
});

module.exports = router;
