
exports.up = function(knex) {
  return knex.schema.createTable('todos', todos => {
    todos.increments().primary();

    todos.string('title', 255).notNullable();

    todos.string('description', 500).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('todos');
};
