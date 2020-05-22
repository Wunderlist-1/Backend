const jwt = require( "jsonwebtoken" )


function restrict() {
  return async ( req, res, next ) => {
    const authErr = {
      message: "Invalid Credentials"
    }

    try{
      console.log( "Req.Headers.Authorization:", req.headers.authorization )
      console.log( "process.env.JWT_SECRET:", process.env.JWT_SECRET )
      const token = req.headers.authorization
      if ( !token ) {
        return res.status( 401 ).json( "Prob1" )
      }

      jwt.verify( token, process.env.JWT_SECRET, ( err, decoded ) => {
        if ( err ) {
          return res.status( 401 ).json( "Prob2" )
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