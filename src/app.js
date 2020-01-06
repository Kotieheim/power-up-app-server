require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");
const workoutsRouter = require("./workouts-router.js/workouts-router");
const weekdaysRouter = require("./weekdays-router.js/weekdays-router");
const validateBearerToken = require("./validate-bearer-token");

const app = express();
const morganOption = NODE_ENV === "production" ? "tiny" : "common";
console.log(process.env.API_TOKEN);
app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
// app.use(validateBearerToken);

app.use(cors());

// app.use("/api/weekdays", weekdaysRouter);
app.use("/api/workouts", workoutsRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

module.exports = app;
