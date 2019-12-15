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
  WeekdaysService.getById(req.app.get("db"), req.params.weekdays_id)
    .then(weekday => {
      if (!weekday) {
        return res.status(404).json({
          error: { message: `That's not a weekday` }
        });
      }
      res.weekday = weekday;
      next();
    })
    .catch(next);
});

module.exports = weekdaysRouter;
