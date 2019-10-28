const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const axios = require("axios");
require("dotenv").config();

router.get(
	"/",
	// auth,

	async (req, res, err) => {
		try {
			const endPoint = "https://api.yelp.com/v3/businesses/search";
			const yelpKey = process.env.YELP_API_KEY;

			let queryStr =
				"https://api.yelp.com/v3/businesses/search?location=cranford&term=pizza";

			axios.defaults.headers.common["Authorization"] = `Bearer ${yelpKey}`;

			const response = await axios.get(queryStr);
			console.log("response", response.data.businesses[0]);
		} catch {
			// console.error(err.message);
			res.status(500).send("Server Error");
		}
	}
);

module.exports = router;
