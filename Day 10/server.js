import express from 'express'

const app = express()

const port = 3000

import connectDB from './database/monogdb.js'
connectDB()

app.listen(port, ()=>{
    console.log('server has started at port', port)
})