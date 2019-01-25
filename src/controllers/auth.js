import bcrypt from 'bcrypt-nodejs'
import User from '../models/User'
import auth from '../services/auth'

const signin = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username })
        if (bcrypt.compareSync(password, user.password)) {
            user.password = undefined
            const token = await auth.generateToken(user)
            res.json({ 
                ok: true,
                message: 'Login done successfully',
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
