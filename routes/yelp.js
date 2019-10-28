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
			let endPoint = "https://api.yelp.com/v3/businesses/search";
			let tokenStr = process.env.YELP_API_KEY;

			let queryStr =
				"https://api.yelp.com/v3/businesses/search?location=boston&term=burrito+sushi+noodles";

			axios.defaults.headers.common["Authorization"] = `Bearer ${tokenStr}`;

			// console.log("ll: ", ll);

			const response = await axios.get(queryStr, {
				headers: { Authorization: `Bearer ${tokenStr}` }
			});
			// console.log("before response");

			console.log("response", response.data);

			// const results = response.data.response.venues;
			// console.log("results: ", results);
		} catch {
			// console.error(err.message);
			res.status(500).send("Server Error");
		}
	}
);

module.exports = router;
