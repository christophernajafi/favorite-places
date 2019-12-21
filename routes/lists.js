const express = require("express");
const router = express.Router();
// const axios = require("axios");

// get all lists
router.get("/", (req, res, next) => {
  console.log("GET ALL LISTS");
});

// get a single list
router.get("/:id", (req, res, next) => {
  console.log("GET ALL LISTS");
});

// create a single list
router.post("/", (req, res, next) => {
  console.log("GET ALL LISTS");
});

// update a single list
router.put("/", (req, res, next) => {
  console.log("GET ALL LISTS");
});

// delete a single list
router.delete("/", (req, res, next) => {
  console.log("GET ALL LISTS");
});

module.exports = router;
