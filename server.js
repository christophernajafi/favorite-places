const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();
const morgan = require("morgan");

// Connect database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Dev logging middleware
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Define routes
app.use("/api/yelp", require("./routes/yelp"));
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/lists", require("./routes/lists"));
app.use("/api/profile-pic", require("./routes/profile-pic"));

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
