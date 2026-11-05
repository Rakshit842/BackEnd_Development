
import express from 'express'

import connectDB from './database/mongodb.js'
import router from './routes/userRoutes.js'

const app = express()
const port = 3000

// Middleware
app.use(express.json())

// Database connection
connectDB()

// Routes
app.use('/api/users', router)

// Server
app.listen(port, () => {
    console.log('Server has started at port', port)
})
