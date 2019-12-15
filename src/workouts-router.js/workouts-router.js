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
  date_created: workout.date_created,
  weekday: workout.weekday
});
workoutsRouter
  .route("/workouts")

  .get((req, res, next) => {
    WorkoutsService.getAllWorkouts(req.app.get("db"))
      .then(workouts => {
        console.log(workouts);
        res.json(workouts.map(serializeWorkout));
      })
      .catch(next);
  });
workoutsRouter
  .route("/workouts/addWorkout")
  .post(bodyParser, (req, res, next) => {
    const {
      muscle,
      exercise,
      exercise_sets,
      reps,
      weight_amount,
      summary,
      date_created,
      weekday
    } = req.body;
    const newWorkout = {
      muscle,
      exercise,
      exercise_sets,
      reps,
      weight_amount,
      summary,
      date_created,
      weekday
    };

    WorkoutsService.insertWorkout(req.app.get("db"), newWorkout)
      .then(workout => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${workout.id}`))
          .json(serializeWorkout(workout));
      })
      .catch(next);
  });

workoutsRouter
  .route("/workouts/:workout_id")
  .all((req, res, next) => {
    const { id } = req.params;
    WorkoutsService.getById(req.app.get("db"), id)
      .then(workout => {
        if (!workout) {
          console.log(`Workout with id ${id} not found.`);
          return res.status(404).json({
            error: { message: `Workout Not Found` }
          });
        }
        res.workout = workout;
        console.log(id);
        next();
      })
      .catch(next);
  })
  .get((req, res) => {
    res.json(serializeWorkout(res.workout));
  })
  .delete((req, res, next) => {
    const { id } = req.params;
    WorkoutsService.deleteWorkout(req.app.get("db"), id)
      .then(numRowsAffected => {
        console.log(`Exercise with id ${id} deleted.`);
        res.status(204).end;
      })
      .catch(next);
  });

module.exports = workoutsRouter;
