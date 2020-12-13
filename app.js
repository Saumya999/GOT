const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const BASE_URL = "/battleApp/v1.0";
const mongoose = require("mongoose");

const listRoutes = require("./api/route/list");
const searchRoutes = require("./api/route/search");
const createRoutes = require("./api/route/createData");

// For logging the requests using morgan

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.h6uil.mongodb.net/got?retryWrites=true&w=majority",
  { useMongoClient: true }
);

app.use(BASE_URL, listRoutes);
app.use(BASE_URL, searchRoutes);
app.use(BASE_URL, createRoutes);

// Error mapping for the routes not found

app.use((req, res, next) => {
  const error = new Error("Endpoint Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
