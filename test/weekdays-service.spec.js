require("dotenv").config();
const app = require("../src/app");
const knex = require("knex");
const fixtures = require("./workouts-fixtures");

describe("/weekdays endpoint", () => {
  context("Weekdays are listed in the DB", () => {
    return supertest(app)
      .get("/api/weekdays")
      .expect(200);
  });
});
