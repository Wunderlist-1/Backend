const jwt = require( "jsonwebtoken" )


function restrict() {
  return async ( req, res, next ) => {
    const authErr = {
      message: "Invalid Credentials"
    }

    try{
      const token = req.headers.authorization
      if ( !token ) {
        return res.status( 401 ).json( authErr )
      }

      jwt.verify( token, process.env.JWT_SECRET, ( err, decoded ) => {
        console.log( err )
        if ( err ) {
          return res.status( 401 ).json( authErr )
        }
        req.token = decoded
        next()
      } )
    } catch ( err ) {
      next( err )
    }
  }
}

module.exports = restrict