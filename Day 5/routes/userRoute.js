import express from 'express'
import { createuser, deleteUser  } from '../controllers/user.js'

const router = express.Router()

router.get('/user', getuser )

router.post('/user', createuser)

 



export default router