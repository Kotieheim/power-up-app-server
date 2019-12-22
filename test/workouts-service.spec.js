const knex = require("knex");
const fixtures = require("./workouts-fixtures");
const app = require("../src/app");

describe("Workouts Endpoints", () => {
  let db;

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DB_URL
    });
    app.set("db", db);
  });
  after("disconnect from db", () => db.destroy());

  before("cleanup", () => db("workout_articles").truncate());

  afterEach("cleanup", () => db("workout_articles").truncate());
  describe("GET /api/workouts", () => {
    context(`Given no workouts`, () => {
      it(`responds with 200 and an empty list`, () => {
        return (
          supertest(app)
            .get("/api/workouts")
            //set authorization here
            .expect(200, [])
        );
      });
    });
    context("Given there are workouts in the database", () => {
      const testWorkouts = fixtures.makeWorkoutsArray();

      beforeEach("insert workouts", () => {
        return db.into("workout_articles").insert(testWorkouts);
      });
      it("gets the workouts from the fixture", () => {
        return (
          supertest(app)
            .get("/api/workouts")
            //set authorization here
            .expect(200, testWorkouts)
        );
      });
    });
  });
});
