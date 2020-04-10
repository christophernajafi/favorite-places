const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const compression = require("compression");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cors = require("cors");

const connectMongoDb = require("./db");

// Connect to database
connectMongoDb();

// Logging middleware
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Body parsing middleware
app.use(express.json({ extended: false }));

// Compression middleware
app.use(compression());

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
  // 100 requests per 10 minutes
  windowMs: 10 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

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
