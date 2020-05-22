exports.up = async function( knex ) {
  await knex.schema.createTable( "Usernames", table => {
    table.increments()
    table.text( "username", 124 ).notNull().unique()
    table.text( "password", 124 ).notNull()
  } )
};

exports.down = async function( knex ) {
  await knex.schema.dropTableIfExists( "Usernames" )
};
