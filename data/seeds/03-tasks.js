exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('tasks').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('tasks').insert([
          {task_description: "Mediate before sleeping", task_notes: "Set aside time to center your thoughts", task_completed: 1, project_id: 1},
          {task_description: "Stop using electronics 1 hr before bed", task_notes: "Focus on eliminating blue light", project_id: 1},
          {task_description: "Do pre-lecture work", task_notes: "intro to sql", task_completed: 1, project_id: 2},
          {task_description: "Attend office hours", task_notes: "come prepared with questions", task_completed: 1, project_id: 2},
          {task_description: "Deploy", task_notes: "remember to push before logging off", project_id: 2},
        ]);
      });
  };