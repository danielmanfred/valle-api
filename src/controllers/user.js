import repository from '../repositories/user'

const getAllUsers = async (req, res) => {
    try {
        const users = await repository.getAllUsers()
        res.json({ users })
    }
    catch (err) {
        res.status(400).json({ error: err })
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await repository.getUserById({ _id: req.params.id })
        res.json({ user })
    }   
    catch (err) {
        res.status(400).json({ error: err })
    }
}

const createUser = async (req, res) => {
    const { username, password, email } = req.body
    try {
        const user = await repository.createUser({ username, password, email })
        res.status(201).json({ 
            message: 'User created successfully',
            user
        })
    }
    catch (err) {
        res.status(400).json({
            message: 'Failed to create user',
            error: err
        })
    }
}

const updateUser = async (req, res) => {
    const { username, email } = req.body
    try {
        const id = { _id: req.id }
        await repository.updateUser()
    }
    catch (err) {

    }
}

module.exports = {
    getAllUsers
}