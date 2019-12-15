"use strict";
const WeekdaysService = {
  getAllWeekdays(knexInstance) {
    return knexInstance
      .select("*")
      .from("weekdays")
      .then(weekdays => {
        return weekdays;
      });
  },

  addWeekday(knexInstance, weekdays) {
    return knexInstance
      .insert(weekdays)
      .into("weekdays")
      .returning("*")
      .then(weekdays => {
        return weekdays[0];
      });
  },

  getById(knexInstance, id) {
    return knexInstance
      .from("weekdays")
      .select("*")
      .where("id", id)
      .first();
  }
};
module.exports = WeekdaysService;
