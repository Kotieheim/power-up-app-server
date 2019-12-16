const path = require("path");
const express = require("express");
const WeekdaysService = require("./weekdays-service");

const weekdaysRouter = express.Router();
const bodyParser = express.json();

const sanitizeWeekday = weekday => ({
  id: weekday.id,
  weekday_name: weekday.weekday_name
});
weekdaysRouter.route("/").get((req, res, next) => {
  WeekdaysService.getAllWeekdays(req.app.get("db"))
    .then(weekdays => {
      let newWeekdays = weekdays.map(weekday => {
        return { id: weekday.id.toString(), name: weekday.weekday_name };
      });
      return newWeekdays;
    })
    .then(weekdays => {
      res.json(weekdays);
    })
    .catch(next);
});

weekdaysRouter.route("/:id").get((req, res, next) => {
  const { id } = req.params;
  WeekdaysService.getById(req.app.get("db"), id)
    .then(weekday => {
      if (!weekday) {
        res.status(400).send("not a valid weekday");
      }
      res.json({ id: weekday.id.toString(), name: weekday.weekday_name });
      console.log(weekday);
    })
    .catch(next);
});

module.exports = weekdaysRouter;
