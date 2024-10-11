const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log('DB CONNECTED')
    })
    .catch((error)=>{
        console.log('error', error.message)
    })



const server = express()

server.listen(process.env.PORT,(()=>{
    console.log(`server up and listening on ${process.env.PORT}`)
}))

