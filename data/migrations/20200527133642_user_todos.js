
exports.up = function(knex) {
  return knex.schema.createTable('user_todos', todos => {
    todos.increments().primary();

    todos
    .integer('user_id')
    .notNullable()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    todos
    .integer('todo_id')
    .notNullable()
    .references('id')
    .inTable('todos')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    todos.unique(['user_id', 'todo_id']);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user_todos');
};
