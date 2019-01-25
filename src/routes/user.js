import express from 'express'
import controller from '../controllers/user'

const router = express.Router()

router.get('/', controller.getAllUsers)
router.get('/:id', controller.getUserById)
router.post('/', controller.createUser)
router.put('/:id', controller.updateUser)
router.delete('/:id', controller.removeUser)

module.exports = app => app.use('/user', router)