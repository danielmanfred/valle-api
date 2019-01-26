import express from 'express'
import controller from '../controllers/auth'
import service from '../services/auth'

const router = express.Router()

router.get('/decodeToken', service.decodeToken)
router.post('/signin', controller.signin)

module.exports = app => app.use('/auth', router)