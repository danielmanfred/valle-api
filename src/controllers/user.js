import repository from '../repositories/user'
import bcrypt from 'bcrypt-nodejs'

const getAllUsers = async (req, res) => {
    try {
        const users = await repository.getAllUsers()
        res.json({ users })
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await repository.getUserById({ _id: req.params.id })
        res.json({ user })
    }   
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const createUser = async (req, res) => {
    const { username, password, email } = req.body
    const cryptpassword = bcrypt.hashSync(password) // Encrypting the password
    try {
        const user = await repository.createUser({ username, password: cryptpassword, email })
        user.password = undefined // Hiding the password in response
        res.status(201).json({ 
            message: 'User created successfully',
            user
        })
    }
    catch (err) {
        res.status(400).json({
            message: 'Failed to create user',
            error: err.message
        })
    }
}

const updateUser = async (req, res) => {
    const { username, email } = req.body
    try {
        const id = { _id: req.params.id }
        if (username) await repository.updateUser(id, { $set: { username } })
        if (email) await repository.updateUser(id, { $set: { email } })
        res.json({ message: 'User updated successfully' })
    }
    catch (err) {
        res.status(400).json({
            message: 'Failed to update user',
            error: err.message
        })
    }
}

const removeUser = async (req, res) => {
    try {
        await repository.removeUser({ _id: req.params.id })
        res.json({ message: 'User deleted successfully' })
    }
    catch (err) {
        res.status(400).json({ 
            message: 'Failed to delete the user',
            error: err.message
        })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    removeUser
}