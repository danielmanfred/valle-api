import bcrypt from 'bcrypt-nodejs'
import User from '../models/User'
import auth from '../services/auth'

/* Login user with username and password */
const signin = async (req, res) => {
    const { username, password } = req.body
    try {
        // Get user by username
        const user = await User.findOne({ username })
        // Verify if the password is correct
        if (bcrypt.compareSync(password, user.password)) {
            user.password = undefined // Hiding the password in response
            const token = await auth.generateToken(user)
            res.json({ 
                ok: true,
                message: 'Login done successfully',
                user,
                token
            })
        }
        else {
            res.json({
                ok: false,
                message: 'Password incorrect' 
            })
        }
    }
    catch (err) {
        res.status(400).json({ 
            ok: false,
            message: 'Username not found',
            error: err.message
        })
    }
}

module.exports = { signin }
