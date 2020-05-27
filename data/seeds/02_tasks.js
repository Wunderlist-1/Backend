exports.seed = async function(knex) {
  await knex( "tasks" ).insert( [
    {
      taskName: "Wake Up",
      taskDescription: "Remove head from pillow, followed by remove body from bed.",
      recurring: true,
      completed: false,
      expired: false,
    },

    {
      taskName: "Make coffee",
      taskDescription: "Making coffee before you've had coffee is hard. Have some coffee first",
      recurring: true,
      completed: false,
      expired: false,
    },

    {
      taskName: "Don't let the existential dread set in",
      taskDescription: "Don't do it, but it doesn't matter if you do.",
      recurring: true,
      completed: false,
      expired: false,
    }
  ] )
}
