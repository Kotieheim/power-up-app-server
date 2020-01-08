require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");
const workoutsRouter = require("./workouts-router.js/workouts-router");
const weekdaysRouter = require("./weekdays-router.js/weekdays-router");
const validateBearerToken = require("./validate-bearer-token");
const authRouter = require("./auth/auth-router");
const usersRouter = require("./users/users-router");

const app = express();
const morganOption = NODE_ENV === "production" ? "tiny" : "common";
app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use(validateBearerToken);

app.use(cors());

// app.use("/api/weekdays", weekdaysRouter);
app.use("/api/workouts", workoutsRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

module.exports = app;
