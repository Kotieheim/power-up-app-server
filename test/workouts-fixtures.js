function makeWorkoutsArray() {
  return [
    {
      id: "1",
      muscle: "Chest",
      exercise: "Bench Press",
      exercise_sets: "3",
      reps: "12",
      weight_amount: "105",
      summary:
        "Occaecati voluptatibus commodi et. Delectus suscipit saepe est reiciendis. Cupiditate laborum voluptatem autem explicabo voluptate. Quae et distinctio sequi dolorem temporibus aliquid.",
      date_created: "2019-12-22T19:40:06.929Z",
      weekday: "1"
    },
    {
      id: "2",
      muscle: "Back",
      exercise: "Deadlift",
      exercise_sets: "5",
      reps: "5",
      weight_amount: "365",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non. Adipisci, pariatur. Molestiae, libero esse hic adipisci autem neque?",
      date_created: "2019-12-22T19:40:06.929Z",
      weekday: "2"
    }
  ];
}

function makeWeekdaysArray() {
  return [
    {
      id: "1",
      weekday_name: "Sunday"
    },

    { id: "2", weekday_name: "Monday" },

    { id: "3", weekday_name: "Tuesday" },

    { id: "4", weekday_name: "Wednesday" },

    { id: "5", weekday_name: "Thursday" },

    { id: "6", weekday_name: "Friday" },

    { id: "7", weekday_name: "Saturday" }
  ];
}

function makeMaliciousWorkout_article() {
  const maliciousWorkout = {
    id: 8,
    muscle: "Nips",
    exercise: "The most nips",
    exercise_sets: "867",
    reps: "6",
    weight_amount: "309",
    date_created: new Date(),
    summary: "Dez nutz, or Dez nips.",
    weekday: "69"
  };
  const expectedWorkout = {
    ...maliciousWorkout,
    muscle: "Nips"
  };
}

module.exports = {
  makeWorkoutsArray,
  makeWeekdaysArray
};
