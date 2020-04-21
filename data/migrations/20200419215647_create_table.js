
exports.up = function(knex) {
  return knex.schema
  .createTable("projects", table =>{
      table.increments();
      table.text("name", 128).unique().notNullable();
      table.text("description", 255);
      table.boolean("completed").notNullable().defaultTo(false);

  })
  .createTable("resource", table =>{
      table.increments();
      table.text("name").notNullable();
      table.text("description")

  })
  .createTable("task", table =>{
      table.increments();
      table.text("description").notNullable();
      table.text("notes");
      table.boolean("completed").notNullable().defaultTo(false);
      table.integer("proj_id")
      .unsigned()
      .references("id")
      .inTable("project")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    
};
