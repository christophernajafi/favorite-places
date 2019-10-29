const express = require("express");
// const connectDB = require("./config/db");
const path = require("path");
const app = express();

// Connect database
// connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// app.get("/", (req, res) => res.send(`<h1>Server started on port ${PORT}</h1>`));

// CORS
// app.use("/api/yelp", (req, res, next) => {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	next();
// });

// Define routes
app.use("/api/yelp", require("./routes/yelp"));
// app.use("/api/users", require("./routes/users"));
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/contacts", require("./routes/contacts"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
	// Set static folder
	app.use(express.static("client/build"));
	app.get("*", (req, res) =>
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
	);
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log("############################################");
	console.log(`-------- Server started on port ${PORT} -------`);
	console.log(`---------- http://localhost:${PORT} -----------`);
	console.log("############################################");
});
