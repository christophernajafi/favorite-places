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
			let location = "new york ny";
			// let location = req.query.location;
			let locationTerms = location.split(" ").join("+");
			let lTerm = "location=" + locationTerms;
			console.log("location: ", lTerm);

			// term
			let terms = "art museums";
			// let terms = req.query.query;
			let queryTerms = terms.split(" ").join("+");
			let qTerm = "term=" + queryTerms;
			console.log("term: ", qTerm);

			let queryStr = endPoint + lTerm + "&" + qTerm;
			console.log("query: ", queryStr);

			console.log("req.query.terms: ", req.query.terms);
			console.log("req.query.location: ", req.query.location);

			// let queryStr =
			// 	"https://api.yelp.com/v3/businesses/search?location=cranford&term=pizza";

			axios.defaults.headers.common["Authorization"] = `Bearer ${yelpApiKey}`;

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
