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
			const endPoint = "https://api.yelp.com/v3/businesses/search?";
			const yelpApiKey = process.env.YELP_API_KEY;

			// location
			let reqLocation = req.query.location;
			let strLocation = reqLocation.split(" ").join("+");
			let location = "location=" + strLocation;

			// term
			let reqTerms = req.query.terms;
			let strTerms = reqTerms.split(" ").join("+");
			let term = "term=" + strTerms;

			let queryStr = endPoint + location + "&" + term;

			axios.defaults.headers.common["Authorization"] = `Bearer ${yelpApiKey}`;

			const { data } = await axios.get(queryStr);
			console.log("response", data.businesses[0]);
			res.status(200).json(data);
		} catch {
			console.error(err.message);
			res.status(500).send("Server Error");
		}
	}
);

module.exports = router;
