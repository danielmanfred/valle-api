import express from 'express'

const router = express.Router()

router.get('/', (req, res) => res.send('Página principal'))

module.exports = app => app.use('/user', router)