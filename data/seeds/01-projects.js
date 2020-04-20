
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {id: 1, name: 'What on earth?', description: 'An earth month project'},
        {id: 2, name: 'Can you smell that?', description: 'A new deoderant that literally works' },
        {id: 3, name: 'The Doors', description: 'You know that groovy band, lets keep the music alive'}
      ]);
    });
};