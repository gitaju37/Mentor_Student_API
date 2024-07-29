import express from 'express'
import { changeMentor, createStudent, previesMentor } from '../Controllers/student.controller.js'



const router = express.Router()

router.post('/create/student',createStudent)
router.put( '/changementor/:id', changeMentor )
router.get('/previesmentor/:id',previesMentor)
export default router