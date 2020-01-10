const express = require("express");
const router = express.Router();
const axios = require("axios");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY;

// const cloudinaryConfig = {
//   cloudName: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   uploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET
// };

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// const uploadProfilePic = (file, options, callback) => {
//   cloudinary.upload(file, options, callback);
// };

// const deleteProfilePic = () => {};

// router.get("/profile-pic");

// upload profile pic and store url in MongoDB

router.post("/", (req, res, next) => {
  try {
    console.log("req.files", req.files);
    const path = Object.values(Object.values(req.files)[0])[0].path;
    console.log("path: ", path);
    const image = cloudinary.uploader.upload(path);
    console.log("image: ", image);
    res.json([image]);
  } catch (err) {
    return next(err);
  }
});

router.delete("/");

module.exports = router;
