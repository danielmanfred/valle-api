import User from '../models/User'

const getAllUsers = async () => await User.find({}, 'username email')

const getUserById = async id => await User.findById(id, 'username email')

const createUser = async data => await (new User(data)).save()

const updateUser = async (id, data) => await User.findByIdAndUpdate(id, data)

const removeUser = async id => await User.deleteOne(id)

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    removeUser
}
