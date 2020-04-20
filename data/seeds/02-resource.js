
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resource").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resource").insert([
        {id: 1, name: 'Greta', description: 'Is about saving the planet and has great ideas'},
        {id: 2, name: 'Smelly person', description: 'Wants a new deoderant that works so they do not smell'},
        {id: 3, name: 'John Densmore', description: 'The drummer for The Doors'}
      ]);
    });
};
