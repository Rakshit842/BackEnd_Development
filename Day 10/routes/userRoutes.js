import express from "express";
import { creatUser } from "../controller/user.js"
const router = express.Router()


router.post('/user',creatUser)

router.get('/user', readUser)

export default router