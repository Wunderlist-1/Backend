const bcrypt = require( "bcryptjs" )
const db = require( "../data/config" )

async function add( user ) {
	user.password = await bcrypt.hash( user.password, 14 )

	const [ id ] = await db( "usernames" ).insert( user )
	return findById( id )
}

function find() {
	return db( "usernames" ).select( "id", "username" )
}

function findBy( filter ) {
	return db( "usernames" )
		.select( "id", "username", "password" )
		.where( filter )
}

function findById( id ) {
	return db( "usernames" )
		.select( "id", "username" )
		.where( { id } )
		.first()
}

module.exports = {
	add,
	find,
	findBy,
	findById,
}