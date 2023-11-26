const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const connectDB = require('./api/config/connectDB')

//IMPORT ROUTE
const missionRoutes = require('./api/routes/missionRoute')
const corsOptions = require("./api/config/corsOptions")

const app = express()
connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(morgan('dev'))

//MISSION ROUTES
app.use('/api/mission', missionRoutes)

mongoose.connection.once('open', () => {
    app.listen(process.env.PORT, () => {
        console.log(`listening on port http://localhost:${process.env.PORT} Gamaforce`)
    })
})