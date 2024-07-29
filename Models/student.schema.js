import mongoose from 'mongoose'
import Mentors from './mentor.schema.js';


const studentSchema = mongoose.Schema( {
    firstName: String,
    lastName: String,
    email: String,
    assigned_mentor: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Mentors'
    } ],
    previes_mentor: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Mentors'
    }]
} )


const Students = mongoose.model( 'Students', studentSchema );
export default Students;