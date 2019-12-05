const path = require("path");
const express = require("express");
const WorkoutsService = require("./workouts-service");

const workoutsRouter = express.Router();
const bodyParser = express.json();
const serializeWorkout = workout => ({
  id: workout.id,
  muscle: workout.muscle,
  exercise: workout.exercise,
  exercise_sets: workout.exercise_sets,
  reps: workout.reps,
  weight_amount: workout.weight_amount,
  summary: workout.summary,
  date_created: workout.date_created
});
workoutsRouter
  .route("/")

  .get((req, res, next) => {
    WorkoutsService.getAllWorkouts(req.app.get("db"))
      .then(workouts => {
        console.log("route call");
        res.json(workouts.map(serializeWorkout));
      })
      .catch(next);
  });

module.exports = workoutsRouter;
