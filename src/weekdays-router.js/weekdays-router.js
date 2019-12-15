const path = require("path");
const express = require("express");
const WeekdaysService = require("./weekdays-service");

const weekdaysRouter = express.Router();
const bodyParser = express.json();

const sanitizeWeekday = weekday => ({
  id: weekday.id,
  weekday_name: weekday.weekday_name
});

weekdaysRouter.route("/weekdays").get((req, res, next) => {
  WeekdaysService.getAllWeekdays(req.app.get("db"))
    .then(weekdays => {
      res.json(weekdays.map(sanitizeWeekday));
    })
    .catch(next);
});

weekdaysRouter.route("/weekdays/:weekday_id").all((req, res, next) => {
  const { id } = req.params;
  WeekdaysService.getById(req.app.get("db"), id)
    .then(workout => {
      if (!workout) {
        console.log(`Weekday with id ${id} not found.`);
        return res.status(404).json({
          error: { message: `weekday Not Found` }
        });
      }
      res.weekday = weekday;
      console.log(id);
      next();
    })
    .catch(next);
});

module.exports = weekdaysRouter;
