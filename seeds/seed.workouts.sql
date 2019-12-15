BEGIN;

INSERT INTO weekdays (weekday_name)
VALUES 
('Sunday'),
('Monday'),
('Tuesday'),
('Wednesday'),
('Thursday'),
('Friday'),
('Saturday');



INSERT INTO workout_articles (muscle, exercise, exercise_sets, reps, weight_amount, summary, weekday)
VALUES
('Chest', 'Bench Press', '3', '12', '105', 'Occaecati voluptatibus commodi et. Delectus suscipit saepe est reiciendis. Cupiditate laborum voluptatem autem explicabo voluptate. Quae et distinctio sequi dolorem temporibus aliquid.', 1),
('Back', 'Deadlift', '5', '5', '365', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non. Adipisci, pariatur. Molestiae, libero esse hic adipisci autem neque?', 2),
('Shoulders', 'Upright Row', '5', '15', '65', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet soluta fugiat itaque recusandae rerum sed nobis. Excepturi voluptas nisi, labore officia, nobis repellat rem ab tempora, laboriosam odio reiciendis placeat?', 3),
('Legs', 'Squats', '6', '8', '225', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.', 4),
('Triceps', 'Dips', '8', '5', '325', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos architecto repellat, in amet soluta exercitationem perferendis eius perspiciatis praesentium voluptate nisi deleniti eaque? Rerum ea quisquam dolore, non error earum?', 5),
('Biceps', 'Dumbbell Curls', '3', '10', '25', 'Occaecati voluptatibus commodi et. Delectus suscipit saepe est reiciendis. Cupiditate laborum voluptatem autem explicabo voluptate. Quae et distinctio sequi dolorem temporibus aliquid.', 6),
('Biceps', 'Dumbbell Curls', '3', '10', '25', 'Occaecati voluptatibus commodi et. Delectus suscipit saepe est reiciendis. Cupiditate laborum voluptatem autem explicabo voluptate. Quae et distinctio sequi dolorem temporibus aliquid.', 7);


COMMIT;