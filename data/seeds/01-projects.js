
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {name: 'What on earth?', description: 'An earth month project'},
        {name: 'Can you smell that?', description: 'A new deoderant that literally works' },
        {name: 'The Doors', description: 'You know that groovy band, lets keep the music alive'}
      ]);
    });
};