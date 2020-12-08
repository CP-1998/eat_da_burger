// Bringing in required dependencies
const express = require('express')
const { join } = require('path')

// Declaring express
const app = express()

// Ngl I really don't know what's going on here, I just use it as boilerplate at this point
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Connecting my 'burger' routes to the express server
app.use(require('./routes'))

// Linking my 'burger_db' to the express server
require('./db').sync()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.log(err))