exports.seed =  async function(knex) {
  await knex( "users" ).insert( [
    { username: "John", password: "GARFIELD!" },
    { username: "Odi", password: "ArfArf!" },
    { username: "Garfield", password: "Lasagna" }
  ] )
}
