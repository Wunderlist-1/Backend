exports.up = function(knex) {
  return knex.schema.createTable( "users", table => {
    table.increments()
    table.text( "username", 124 ).notNull().unique()
    table.text( "password", 124 ).notNull()
  } )
};

exports.down = async function( knex, Promise ) {
 return knex.schema.dropTableIfExists( "users" )
};
