const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/", async (req, res, err) => {
  try {
    const endpoint = "https://api.yelp.com/v3/businesses/search?";

    const yelpApiKey = process.env.YELP_API_KEY;
    axios.defaults.headers.common["Authorization"] = `Bearer ${yelpApiKey}`;

    // location
    const reqLocation = req.query.location;
    const strLocation = reqLocation.split(" ").join("+");
    const location = "location=" + strLocation;

    // term
    const reqTerms = req.query.terms;
    const strTerms = reqTerms.split(" ").join("+");
    const term = "term=" + strTerms;

    const fullEndpoint = endpoint + location + "&" + term;

    // prevents Chrome cross-site resource warning
    // res.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=None");
    res.setHeader("set-cookie", [
      "same-site-cookie=bar; SameSite=Lax",
      "cross-site-cookie=foo; SameSite=None; Secure"
    ]);

    const { data } = await axios.get(fullEndpoint);
    res.status(200).json(data);
  } catch {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
