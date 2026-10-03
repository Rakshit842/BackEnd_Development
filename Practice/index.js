import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/twitter',(req,res)=>{
    res.send('hello')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at chai aur code<h1>')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai piyo<h2>")
})

app.listen(process.env.PORT,()=>{
    console.log("Server has started on port", port)
})