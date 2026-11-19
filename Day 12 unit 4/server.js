import express from "express";
const app = express()
import connectDB from "./database/mongodb.js";
import userRouter from "./routes/userRouter.js";


app.use(express.json())
app.use(userRouter)


connectDB()


const port = 3000


app.listen(port, ()=>{
    console.log('server has started at port : ', port)
})