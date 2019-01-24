import User from '../models/User'

const getAllUsers = async () => await User.find()

const getUserById = async id => await User.findById(id)

const createUser = async data => {
    const user = new User(data)
    return await user.save()
}

const updateUser = async (id, data) => await User.findByIdAndUpdate(id, data)

const removeUser = async id => await User.deleteOne(id)

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    removeUser
}
