
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("task").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("task").insert([
        {description: 'Get someone to contact greta', notes: 'We have secured Greta for an interview'},
        {description: 'Can you smell that?', notes: 'It is harder than we though to find someone willing to trial new deoderants' },
        {description: 'Get John off his high horse and celebrate this memerable time', notes: 'He was hard to get but he finally agreed'}
      ]);
    });
};
