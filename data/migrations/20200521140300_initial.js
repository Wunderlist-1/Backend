exports.up = async function( knex ) {


  await knex.schema.createTable( "users", ( table ) => {
    table.increments( "id" )
    table.string( "username", 124 ).unique().notNull()
    table.text( "password", 124 ).notNull()
    table.timestamps( true, true )
  } )

  await knex.schema.createTable( "toDoList", ( table ) => {
    table.increments( "id" )
    table.string( "listName" ).notNull()
    table.timestamps( true, true )
    table.integer( "userId" ).references( "id" ).inTable( "users" )
  } )

  await knex.schema.createTable( "tasks", ( table ) => {
    table.increments( "id" )
    table.string( "taskName" ).notNull()
    table.text( "taskDescription" )
    table.boolean( "recurring" ).defaultTo( false ).notNull()
    table.boolean( "completed" ).defaultTo( false ).notNull()
    table.boolean( "expired" ).defaultTo( false ).notNull()
    table.timestamps( true, true )
    table.integer( "toDoListId" ).references( "id" ).inTable( "toDoList" )
  } )

}

exports.down = async function( knex ) {
  await knex.schema.dropTableIfExists( "tasks" )
  await knex.schema.dropTableIfExists( "toDoList" )
  await knex.schema.dropTableIfExists( "users" )

}
