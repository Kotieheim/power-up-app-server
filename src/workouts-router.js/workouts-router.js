const path = require("path");
const express = require("express");
const WorkoutsService = require("./workouts-service");
const workoutsRouter = express.Router();
const bodyParser = express.json();
const { requireAuth } = require("../middleware/jwt-auth");

workoutsRouter
  .route("/")
  .all(requireAuth)
  .get((req, res, next) => {
    console.log(req.user);
    WorkoutsService.getUserWorkouts(req.app.get("db"), req.user.id)
      .then(workouts => {
        let newWorkouts = workouts.map(workout => {
          return {
            id: workout.id.toString(),
            muscle: workout.muscle,
            exercise: workout.exercise,
            exercise_sets: workout.exercise_sets,
            reps: workout.reps,
            weight_amount: workout.weight_amount,
            summary: workout.summary,
            date_created: workout.date_created,
            weekday: workout.weekday.toString(),
            user_id: workout.user_id
          };
        });
        return newWorkouts;
      })

      .then(sanitizedWeekdays => {
        res.json(sanitizedWeekdays);
      })
      .catch(next);
  })
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
      muscle: muscle,
      weekday: weekday,
      exercise,
      exercise_sets,
      reps,
      weight_amount,
      summary,
      date_created,
      user_id: req.user.id
    };
    console.log(newWorkout);
    for (const [key, value] of Object.entries(newWorkout)) {
      if (value == null) {
        return res.status(400).json({
          error: { message: `missing '${key}' in request body` }
        });
      }
    }
    WorkoutsService.insertWorkout(req.app.get("db"), newWorkout).then(
      workout => {
        res
          .status(201)
          .location(`http://localhost:8080/workouts/${workout.id}`)
          .json({
            id: workout.id.toString(),
            muscle: workout.muscle,
            exercise: workout.exercise,
            exercise_sets: workout.exercise_sets,
            reps: workout.reps,
            weight_amount: workout.weight_amount,
            summary: workout.summary,
            date_created: workout.date_created,
            weekday: workout.weekday.toString()
          });
      }
    );
  });

workoutsRouter
  .route("/:id")
  .get((req, res, next) => {
    const { id } = req.params;
    WorkoutsService.getById(req.app.get("db"), id).then(workout => {
      if (!workout) {
        return res.status(400).send("Workout does not exist");
      }
      res.json({
        id: workout.id.toString(),
        muscle: workout.muscle,
        exercise: workout.exercise,
        exercise_sets: workout.exercise_sets,
        reps: workout.reps,
        weight_amount: workout.weight_amount,
        summary: workout.summary,
        date_created: workout.date_created,
        weekday: workout.weekday.toString()
      });
    });
  })
  .delete(bodyParser, (req, res, next) => {
    const { id } = req.params;
    WorkoutsService.deleteWorkout(req.app.get("db"), id)
      .then(workout => {
        res.status(204).send(`Workout with id:${id} deleted`);
      })
      .catch(next);
  });

module.exports = workoutsRouter;
