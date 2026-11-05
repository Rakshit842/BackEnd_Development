import express from "express";
import { createUser, readUser, updateUser } from "../controller/user.js"
const router = express.Router()


router.post('/user',createUser)

router.get('/user', readUser)

router.put('/user/:id', updateUser)

export default router