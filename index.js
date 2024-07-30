import express from 'express'
import cors from 'cors'
import connectDB from './Database/dbConfig.js'
import studentRoutes from './Routers/student.router.js'
import mentorRoutes from './Routers/mentor.router.js'

const app = express()
app.use( cors() )
app.use( express.json() )




app.get( '/', ( req, res ) => {
    res.status( 200 ).send("Mentor and Student Assigning with Database")
})

connectDB();
app.use( '/student', studentRoutes )
app.use('/mentor', mentorRoutes)



app.listen( process.env.PORT, () => {
    console.log("APP is listening in the port",process.env.PORT)
})