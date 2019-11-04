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
			const endpoint = "https://api.yelp.com/v3/businesses/search?";
			const yelpApiKey = process.env.YELP_API_KEY;

			// location
			const reqLocation = req.query.location;
			const strLocation = reqLocation.split(" ").join("+");
			const location = "location=" + strLocation;

			// term
			const reqTerms = req.query.terms;
			const strTerms = reqTerms.split(" ").join("+");
			const term = "term=" + strTerms;

			const fullEndpoint = endpoint + location + "&" + term;

			axios.defaults.headers.common["Authorization"] = `Bearer ${yelpApiKey}`;

			const { data } = await axios.get(fullEndpoint);
			// console.log("response", data.businesses[0]);
			res.status(200).json(data);
		} catch {
			console.error(err.message);
			res.status(500).send("Server Error");
		}
	}
);

module.exports = router;
