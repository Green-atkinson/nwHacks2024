// Load .env variables 
require('dotenv').config()

// pull library
const express = require('express')
const app = express() // config server

// mongoose lib
const mongoose = require('mongoose')

// connect database for website
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

// Server accept Json
app.use(express.json())

// Set up route
const cookDbRouter = require('./routes/cookDb')
app.use('/cookDb', cookDbRouter) // localhost:3000/cookDb

// Open server (nodemon)
app.listen(3000, () => console.log('Server Started'))


