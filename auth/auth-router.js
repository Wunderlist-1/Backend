const router = require( 'express' ).Router()
const bcrypt = require( "bcryptjs" )
const jwt = require( "jsonwebtoken" )
const Users = require( "../users/users-model" )

router.post( "/register", async ( req, res, next ) => {
	try {
		const { username } = req.body
		const user = await Users.findBy( { username } ).first()

		if ( user ) {
			return res.status( 409 ).json( {
				message: "Username is already taken",
			} )
		}

		res.status( 201 ).json( await Users.add( req.body ) )
	} catch( err ) {
		next( err )
	}
})

router.post( "/login", async ( req, res, next ) => {
	const authErr = {
		message: "Invalid Credentials",
	}

	try {
		const user = await Users.findBy( { username: req.body.username } ).first()
		if ( !user ) {
			return res.status( 401 ).json( authErr )
		}

		const passwordValid = await bcrypt.compare( req.body.password, user.password )
		if ( !passwordValid ) {
			return res.status( 401 ).json( authErr )
		}

		const tokenPayload = {
			userId: user.id
		}


		res.json( {
			token: jwt.sign( tokenPayload, process.env.JWT_SECRET ),
			message: `Welcome ${ user.username }!`
		} )
	} catch( err ) {
		next( err )
	}
} )


module.exports = router