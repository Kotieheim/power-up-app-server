const WorkoutsService = {
  getAllWorkouts(knex) {
    return knex.select("*").from("workout_articles");
  },
  getById(knex, id) {
    return knex
      .from("workout_articles")
      .select("*")
      .where("id", id)
      .first();
  },
  insertWorkout(knex, newWorkout) {
    return knex
      .insert(newWorkout)
      .into("bookmarks")
      .returning("*")
      .then(rows => {
        return rows[0];
      });
  },
  deleteWorkout(knex, id) {
    return knex("workout_articles")
      .where({ id })
      .delete();
  },
  updateWorkout(knex, id, newWorkoutFields) {
    return knex("workout_articles")
      .where({ id })
      .update(newWorkoutFields);
  }
};
module.exports = WorkoutsService;
