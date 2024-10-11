const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/userRoute')
const todoRouter = require('./routes/todoRouter')
const cors = require('cors')
require('dotenv').config()
const server = express()

mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log('DB CONNECTED')
    })
    .catch((error)=>{
        console.log('error', error.message)
    })

const corsOption = {
    origin: [
        'http://localhost:3000/'
    ]
}

server.use(cors(corsOption))
server.use(express.json())

server.use('/', userRouter)
server.use('/', todoRouter)

server.listen(process.env.PORT,(()=>{
    console.log(`server up and listening on ${process.env.PORT}`)
}))

