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
			const yelpKey = process.env.YELP_API_KEY;

			// term
			let terms = "pizza hamburger burrito";
			let queryTerms = terms.split(" ").join("+");
			let qTerm = "term=" + queryTerms;
			console.log("term: ", qTerm);

			// location
			let location = "new york ny";
			let locationTerms = location.split(" ").join("+");
			let lTerm = "location=" + locationTerms;
			console.log("location: ", lTerm);

			let queryStr =
				"https://api.yelp.com/v3/businesses/search?location=cranford&term=pizza";

			axios.defaults.headers.common["Authorization"] = `Bearer ${yelpKey}`;

			const { data } = await axios.get(queryStr);
			// console.log("response", data.businesses[0]);
			res.status(200).json(data);
		} catch {
			// console.error(err.message);
			res.status(500).send("Server Error");
		}
	}
);

module.exports = router;
