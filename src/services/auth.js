import jwt from 'jsonwebtoken'
import key from '../config/keys'

/* Generate token by means of JWT */
const generateToken = async user => {
    // Forming the structure token data
    const data = {
        iss: 'Valle',
        sub: user,
        iat: new Date().getTime(),
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) // Token expires in 24h
    }

    return jwt.sign(data, key.jwt.secret) // Creating token
} 

/* Get user informations inside the token */
const decodeToken = async (req, res) => {
    try {
        let decoded = await jwt.verify(req.headers['x-access-token'], keys.jwt.secret)
        res.json({
            success: true,
            token: decoded.sub
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: 'Invalid token',
            error: err
        })
    }
}
  
module.exports = { 
    generateToken,
    decodeToken
}