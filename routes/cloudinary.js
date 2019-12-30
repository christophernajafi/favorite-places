const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY;

const preset = {};

const uploadProfilePic = () => {};

const deleteProfilePic = () => {};

router.get("/profile-pic");

router.post("/profile-pic");

router.delete("/profile-pic");

module.exports = router;
