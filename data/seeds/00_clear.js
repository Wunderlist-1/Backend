exports.seed = async function( knex ) {
  await knex( "tasks" ).truncate()
  await knex( "toDoList" ).truncate()
  await knex( "users" ).truncate()
}
