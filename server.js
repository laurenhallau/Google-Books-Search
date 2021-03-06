const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();
const apiRoutes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(apiRoutes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooksearch",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});