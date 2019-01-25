import jwt from 'jsonwebtoken'
import key from '../config/keys'

const generateToken = async user => {
    const data = {
        iss: 'Valle',
        sub: user,
        iat: new Date().getTime(),
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) // Token expires in 24h
    }

    return jwt.sign(data, key.jwt.secret)
} 

module.exports = { generateToken }