function makeWorkoutsArray() {
  return [
    {
      id: "1",
      muscle: "Chest",
      exercise: "Bench Press",
      exercise_sets: "3",
      reps: "12",
      weight_amount: "105",
      date_created: new Date(),
      summary:
        " Occaecati voluptatibus commodi et. Delectus suscipit saepe est reiciendis. Cupiditate laborum voluptatem autem explicabo voluptate. Quae et distinctio sequi dolorem temporibus aliquid.",
      weekday: "1"
    },
    {
      id: "2",
      muscle: "Chest",
      exercise: "Incline Bench",
      exercise_sets: "2",
      reps: "9",
      weight_amount: "125",
      date_created: new Date(),
      summary:
        " Occaecati voluptatibus commodi et. Delectus suscipit saepe est reiciendis. Cupiditate laborum voluptatem autem explicabo voluptate. Quae et distinctio sequi dolorem temporibus aliquid.",
      weekday: "2"
    }
    // {
    //   id: "3",
    //   muscle: "Chest",
    //   exercise: "Bench fly",
    //   exercise_sets: "4",
    //   reps: "15",
    //   weight_amount: "115",
    //   date_created: new Date(),
    //   summary:
    //     " Occaecati voluptatibus commodi et. Delectus suscipit saepe est reiciendis. Cupiditate laborum voluptatem autem explicabo voluptate. Quae et distinctio sequi dolorem temporibus aliquid.",
    //   weekday: "3"
    // }
    // {
    //   id: "4",
    //   muscle: "Chest",
    //   exercise: "Dumbbell Press",
    //   exercise_sets: "3",
    //   reps: "10",
    //   weight_amount: "205",
    //   date_created: new Date(),
    //   summary:
    //     " Occaecati voluptatibus commodi et. Delectus suscipit saepe est reiciendis. Cupiditate laborum voluptatem autem explicabo voluptate. Quae et distinctio sequi dolorem temporibus aliquid.",
    //   weekday: "4"
    // },
    // {
    //   id: "5",
    //   muscle: "Chest",
    //   exercise: "Bench Press",
    //   exercise_sets: "5",
    //   reps: "6",
    //   weight_amount: "225",
    //   date_created: new Date(),
    //   summary:
    //     " Occaecati voluptatibus commodi et. Delectus suscipit saepe est reiciendis. Cupiditate laborum voluptatem autem explicabo voluptate. Quae et distinctio sequi dolorem temporibus aliquid.",
    //   weekday: "5"
    // },
    // {
    //   id: "6",
    //   muscle: "Chest",
    //   exercise: "Bench Press",
    //   exercise_sets: "5",
    //   reps: "5",
    //   weight_amount: "175",
    //   date_created: new Date(),
    //   summary:
    //     " Occaecati voluptatibus commodi et. Delectus suscipit saepe est reiciendis. Cupiditate laborum voluptatem autem explicabo voluptate. Quae et distinctio sequi dolorem temporibus aliquid.",
    //   weekday: "6"
    // },
    // {
    //   id: "7",
    //   muscle: "Back",
    //   exercise: "Deadlift",
    //   exercise_sets: "6",
    //   reps: "6",
    //   weight_amount: "405",
    //   date_created: new Date(),
    //   summary:
    //     " Occaecati voluptatibus commodi et. Delectus suscipit saepe est reiciendis. Cupiditate laborum voluptatem autem explicabo voluptate. Quae et distinctio sequi dolorem temporibus aliquid.",
    //   weekday: "7"
    // },
    // {
    //   id: "8",
    //   muscle: "Back",
    //   exercise: "Pullups",
    //   exercise_sets: "3",
    //   reps: "12",
    //   weight_amount: "205",
    //   date_created: new Date(),
    //   summary:
    //     " Occaecati voluptatibus commodi et. Delectus suscipit saepe est reiciendis. Cupiditate laborum voluptatem autem explicabo voluptate. Quae et distinctio sequi dolorem temporibus aliquid.",
    //   weekday: "1"
    // },
    // {
    //   id: "9",
    //   muscle: "Back",
    //   exercise: "Bent over rows",
    //   exercise_sets: "4",
    //   reps: "8",
    //   weight_amount: "135",
    //   date_created: new Date(),
    //   summary:
    //     " Occaecati voluptatibus commodi et. Delectus suscipit saepe est reiciendis. Cupiditate laborum voluptatem autem explicabo voluptate. Quae et distinctio sequi dolorem temporibus aliquid.",
    //   weekday: "3"
    // }
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
  makeWorkoutsArray
};
