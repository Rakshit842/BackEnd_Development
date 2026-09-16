import express from 'express'
import { createuser, deleteuser, getuser, updateuser  } from '../controllers/user.js'

const router = express.Router()

router.get('/user', getuser )

router.post('/user', createuser)


router.put('/user/:id', updateuser)


router.delete('/user/:id', deleteuser)

 



export default router