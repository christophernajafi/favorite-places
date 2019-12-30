const express = require("express");
const router = express.Router();
const axios = require("axios");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY;

const preset = {};

const uploadProfilePic = (file, options, callback) => {
  cloudinary.upload(file, options, callback);
};

const deleteProfilePic = () => {};

router.get("/profile-pic");

router.post("/profile-pic");

router.delete("/profile-pic");

module.exports = router;
