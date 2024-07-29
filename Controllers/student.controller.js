import Students from "../Models/student.schema.js";
import Mentors from "../Models/mentor.schema.js";
export const createStudent = async(req,res) => {
    try {
        const student = new Students(req.body)
        await student.save()
        res.status(200).json({messege:"Student created Succesfully",data:student})
    
  } catch (error) {
    console.log(error)
  }

}

export const changeMentor = async ( req, res ) => {
  try {
    const studentId = req.params.id;
    const { newMentorId } = req.body;
    console.log(studentId, newMentorId)
    
    const student = await Students.findById( studentId )
    if ( !student ) {
      return res.status( 404 ).json( { status: 'error', message: 'Student not found.' } );
    }

    const newMentor = await Mentors.findById( newMentorId );
    if ( !newMentor ) {
      return res.status( 404 ).json( { status: 'error', message: 'New mentor not found.' } );
    }

    if ( student.assigned_mentor.length > 0 ) {
      const existingMentors = student.assigned_mentor;

      student.previes_mentor = [ ...new Set( [ ...student.previes_mentor, ...existingMentors ] ) ];
    }

    student.assigned_mentor = [ newMentorId ];
    await student.save();

    res.status( 200 ).json( {
      data: student,
      message: 'Mentor changed successfully.'
    } );
  } catch ( error ) {
    console.log( error );
  }
};

export const previesMentor = async ( req, res ) => {
    try {
        const studentId = req.params.id
        const student = await Students.findById( studentId )
        if ( !student ) {
            return res.status( 404 ).json( { message: "Student not found" } )
      }
      
      res.status( 200 ).json( {
        message: "Previous mentors of the student", data: {
          StudentName: student.firstName, previes_mentor: student.previes_mentor
        }
      } )
    } catch (error) {
        console.log(error)
    }
}

