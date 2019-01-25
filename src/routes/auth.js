import express from 'express'
import controller from '../controllers/auth'

const router = express.Router()

router.post('/signin', controller.signin)

module.exports = app => app.use('/auth', router)