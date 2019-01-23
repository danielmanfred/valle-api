// Loading modules
import express from 'express'
import handlebars from 'express-handlebars'
import bodyParser from 'body-parser'

const app = express()

// Settings
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Routes
require('./routes/user')(app)

const PORT = 8081

app.listen(PORT, () => console.log('Server running!'))