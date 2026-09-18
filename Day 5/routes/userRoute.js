import express from 'express'
import {getuser, createuser, updateuser, deleteuser} from '../controllers/user.js'

const router = express.Router()

router.get('/users', getuser)
router.post('/user', createuser)
router.put('/user/:id', updateuser)
router.delete('/user/:id', deleteuser)


export default router