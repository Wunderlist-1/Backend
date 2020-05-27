// const express = require( "express" )
// const cors = require( "cors" )
// const helmet = require( "helmet" )
// const cookieParser = require( "cookie-parser" )
// const authRouter = require( "./auth/auth-router" )
// const usersRouter = require( "./users/users-router" )
// const todoRouter = require( "./todos/todos-router" )
// require( "dotenv" ).config()

// const server = express()
// const port = process.env.PORT || 5000

// server.use( helmet() )
// server.use( cors() )
// server.use( express.json() )
// server.use( cookieParser() )

// server.use( "/auth", authRouter )
// server.use( "/user", usersRouter )
// // server.use( "/todo", todoRouter )
// server.get( "/", ( req, res ) => {
// 	res.json( {
// 		message: "Welcome to our API",
// 	} )
// } )

// server.use( ( err, req, res, next ) => {
// 	console.log( err )
// 	res.status( 500 ).json( {
// 		message: "Something went wrong",
// 	} )
// } )

// if ( !module.parent ) {
// 	server.listen( port, () => {
// 		console.log( `Running at http://localhost:${port}` )
// 	} )
// }

// module.exports = server

require('dotenv').config();

const server = require('./api/server.js');

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
	console.log(`\n=== Server listening on port ${PORT} ===\n`);
})