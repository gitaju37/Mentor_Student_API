import Mentors from "../Models/mentor.schema.js";
import Students from "../Models/student.schema.js";


export const createMentor = async ( req, res ) => {
    console.log(req.body)
    try {
        const { firstName, lastName, email } = ( req.body )
        const mentor = new Mentors( { firstName, lastName, email } )
        console.log(mentor)
        await mentor.save()
        res.status(200).json({messege:"Mentor Created Succesfully",data:mentor})
    } catch (error) {
        console.log(error)
    }
}

export const assignStudent = async ( req, res ) => {
    try {
        const mentorId = req.params.id
        const students = req.body.studentId
        
        if ( !mentorId || !students ) {
            return res.status( 404 ).json( { message: "Mentor or Student not found" } )
        }
        const updated_mentor = await Mentors.findByIdAndUpdate( mentorId, { assigned_students: students }, { new: true } );
        await Students.updateMany( { _id: { $in: students } }, { $push: { assigned_mentor: mentorId } } );
        res.status( 200 ).json( {messege:"Student Assigned Succesfully",data:updated_mentor} )
    
    }
    catch ( error ) {
        console.log( error )
    }
}

export const assignedStudent = async ( req, res ) => {
    try {
        const mentorId = req.params.id
        const mentor = await Mentors.findById( mentorId ).populate( 'assigned_students' )
        if ( !mentor ) {
            return res.status( 404 ).json( { message: "Mentor not found" } )
        }
        console.log(mentor)
        res.status( 200 ).json( {
            messege: "Assigned Student List",
            Mentor: mentor.firstName,
            Students: mentor.assigned_students.map(( item ) => [ { FirstName: item.firstName, LastName: item.lastName } ] )
          } )
    }
    catch (error){
        console.log(error)
    }
};
