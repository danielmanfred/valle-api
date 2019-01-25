// Loading modules
import express from 'express'
import handlebars from 'express-handlebars'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import key from './config/keys'

const app = express()

// Conneting to the database
mongoose.Promise = global.Promise
mongoose.connect(key.mongodb.mlab, { useNewUrlParser: true, useCreateIndex: true })
mongoose.connection.once('open', () => {
  console.log('connected to database')
})

// Settings
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Routes
require('./routes/user')(app)
require('./routes/auth')(app)

app.get('/', (req, res) => { res.json({ message: 'Welcome to the Valle API' }) })

app.listen(key.server.port, () => console.log('Server running!'))
