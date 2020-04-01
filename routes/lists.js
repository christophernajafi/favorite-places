const express = require("express");
const router = express.Router();

const List = require("../db/models/List");

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

// get all lists from a user
router.get("/", async (req, res) => {
  try {
    console.log("GET ALL LISTS");
    const lists = await List.find({ user: req.user.id }).sort({
      date: -1
    });
    res.status(200).json(lists);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// get a single list
router.get("/:id", async (req, res) => {
  const listId = req.params.id;

  try {
    console.log("GET A SINGLE LIST");
    const list = await List.findById(listId);
    res.status(200).json(list);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// create a single list
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  try {
    console.log("CREATE A SINGLE LIST");

    const newList = await new List({ title, description, user: req.user.id });

    console.log("newList: ", newList);

    const list = await newList.save();

    res.status(201).json(list);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
    // return next(err);
  }
});

// update a single list
router.put("/", async (req, res) => {
  const listId = req.params.id;

  const { title, description } = req.body;

  try {
    console.log("UPDATE A SINGLE LIST");
    const list = await List.findById(listId);

    list.title = title;
    list.description = description;

    const updatedList = await list.save();

    res.status(200).json(updatedList);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// delete a single list
// also need to delete all places associated with the list
router.delete("/:id", async (req, res) => {
  try {
    console.log("DELETE A SINGLE LIST");
    const list = await List.findById(req.params.id);
    if (!list) return res.status(404).json({ msg: "List not found" });
    // Make sure user owns contact
    if (list.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    await List.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: "List removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
