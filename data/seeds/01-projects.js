exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('projects').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('projects').insert([
          {project_name: "Healthy Lifestyle", project_description: "sleep, run, eat", project_completed: 1},
          {project_name: "Work", project_description: "code, code, code"},
        ]);
      });
  };