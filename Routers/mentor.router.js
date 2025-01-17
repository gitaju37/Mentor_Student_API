import express from 'express'
import { assignedStudent, assignStudent, createMentor, getAllMentors } from '../Controllers/mentor.controller.js'


const router = express.Router()

router.post( '/create/mentor', createMentor )
router.post( '/assignstudent/:id', assignStudent )
router.get( '/getassignedstudents/:id', assignedStudent )
router.get('/getallmentor',getAllMentors)

export default router

