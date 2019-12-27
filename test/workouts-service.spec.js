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

  describe("GET /workouts", () => {
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

    context("Given workouts in the database", () => {
      const testWorkouts = fixtures.makeWorkoutsArray();

      beforeEach("Insert workout", () => {
        return db.into("workout_articles").insert(testWorkouts);
      });
      it("gets the workouts from the store", () => {
        return (
          supertest(app)
            .get("/api/workouts")

            //set authorization here
            .expect(200, testWorkouts)
        );
      });
    });
  });
  // describe("GET /workouts/:id", () => {
  //   context(`Given no bookmarks`, () => {
  //     it(`responds 404 when the workout doesn't exist`, function(done) {
  //       this.timeout(16000);
  //       return (
  //         supertest(app)
  //           .get("api/workouts/123")
  //           //set authorization here
  //           .expect(400)
  //       );
  //     });
  //   });
  // });
});
