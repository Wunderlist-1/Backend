const bcrypt = require( "bcryptjs" )
const db = require( "../data/config.js" )
module.exports = {
	add,
	find,
	findBy,
	findById,
	findUserTodos,
	addTodo,
	update,
	remove
}
async function add( user ) {
	return db('users').insert(user, 'id');
}

function find() {
	return db( "users" ).select( "id", "username" )
}

function findBy( filter ) {
	return db( "users" ).where( filter )
}

function findById( id ) {
	return db( "users" )
		.select( "id", "username" )
		.where( { id } )
		.first()
}

function findUserTodos(userId){
	return db('user_todos')
	.where('user_todos.user_id', userId)
	.join('users', 'users.id', 'user_todos.user_id' )
	.join('todos', 'todos.id', 'user_todos.todo_id')
	.select('todos.*')
}

function addTodo(userId, todoId){
	return db('user_todos').insert({
		user_id: userId,
		todo_id: todoId
	}, 'id')
}

function update(id, user){
	return db('users')
	.where('id', Number(id))
	.update(user);
}

function remove(id){
	return db('users')
	.where('id', Number(id))
	.del();
}