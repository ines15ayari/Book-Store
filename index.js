const express = require('express')
const App = express()
const connect = require("./Config/connectDB")
const bookRoute = require('./Routes/bookRoutes')
const authRoute = require('./Routes/authRoute')

require("dotenv").config;
const cors = require('cors')
//middleware global
App.use(express.json())
App.use(cors());

const Port = process.env.PORT || 6000;
App.listen(Port, (e) => {
  if (e) {
    console.log('Error on server')
  }
  else {
    console.log(`Server is running on port ${Port}`)
  }
})
connect()
App.use('/book', bookRoute)
App.use('/auth', authRoute)