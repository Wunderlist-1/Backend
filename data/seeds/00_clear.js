exports.seed = async function( knex ) {
  await knex( "usernames" ).truncate()
  await knex( "Users" ).truncate()
  await knex( "ToDoList" ).truncate()
  await knex( "Tasks" ).truncate()
}
