require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV, CLIENT_ORIGIN } = require("./config");
const workoutsRouter = require("./workouts-router.js/workouts-router");
const weekdaysRouter = require("./weekdays-router.js/weekdays-router");

const app = express();
const morganOption = NODE_ENV === "production" ? "tiny" : "common";

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use("/api", weekdaysRouter);
app.use("/api", workoutsRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

module.exports = app;
