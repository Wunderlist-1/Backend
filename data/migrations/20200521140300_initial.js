exports.up = async function( knex ) {


  await knex.schema.createTable( "Users", ( table ) => {
    table.increments( "Id" )
    table.string( "Username" ).unique().notNull()
    table.timestamps( true, true )
  } )

  await knex.schema.createTable( "ToDoList", ( table ) => {
    table.integer( "UserId" ).references( "Id" ).inTable( "Users" )
    table.increments( "Id" )
    table.string( "ListName" ).notNull()
    table.timestamps( true, true )
  } )

  await knex.schema.createTable( "Tasks", ( table ) => {
    table.increments( "Id" )
    table.string( "TaskName" ).notNull()
    table.text( "TaskDescription" )
    table.boolean( "Recurring" ).defaultTo( false )
    table.boolean( "Completed" ).defaultTo( false )
    table.boolean( "Expired" ).defaultTo( false )
    table.integer( "ToDoListId" ).references( "Id" ).inTable( "ToDoList" )
    table.timestamps( true, true )
  } )

}

exports.down = async function( knex ) {
  await knex.schema.dropTableIfExists( "Tasks" )
  await knex.schema.dropTableIfExists( "ToDoList" )
  await knex.schema.dropTableIfExists( "Users" )

}
