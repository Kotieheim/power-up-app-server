const WeekdaysService = {
  getAllWeekdays(knex) {
    return knex.select("*").from("weekdays");
  },
  getById(knex, id) {
    return knex
      .from("weekdays")
      .select("*")
      .where("id", id)
      .first();
  }
};

module.exports = WeekdaysService;
