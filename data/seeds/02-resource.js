
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resource").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resource").insert([
        {name: 'Greta', description: 'Is about saving the planet and has great ideas'},
        {name: 'Smelly person', description: 'Wants a new deoderant that works so they do not smell'},
        {name: 'John Densmore', description: 'The drummer for The Doors'}
      ]);
    });
};
