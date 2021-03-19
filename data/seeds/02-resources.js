exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('resources').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('resources').insert([
          {resource_name: "Sleep equipment", resource_description: "Includes mattress, sheets, pillows, and ear plugs"},
          {resource_name: "Computer", resource_description: "A portal to the internet"},
          {resource_name: "Playing cards", resource_description: "Used to gamble."},
        ]);
      });
  };