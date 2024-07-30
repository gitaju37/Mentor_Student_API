# MENTOR AND STUDENT ASSIGING API :student:
## Overview :green_book:
This project allows administrators to assign students to mentors, and manage mentor-student relationships. It uses a database to store mentor and student information.
## Features :sun_with_face:
## Create Mentor
### END POINT : /mentor/create/mentor
METHOD :POST
## Create Student
### END POINT : /student/create/student
METHOD:POST
## Assign a student to Mentor
### END POINT: /mentor/assignstudent/:id
METHOD:POST
##  Change Mentor for particular Student
### END POINT : /student/changementor/:id
METHOD: PUT
## show all students for a particular mentor
### END POINT : /mentor/getassignedstudents/:id
METHOD : POST
## Get All Students
### END POINT:/student/getallstudent
METHOD : GET
## Get All Mentors
### END POINT : /mentor/getallmentor
METHOD:GET
## show the previously assigned mentor for a particular student
### END POINT: /student/previesmentor/:id
METHOD: GET

## Setup :flashlight:

### 1. Clone the repository
### 2. Run npm install to install dependencies
### 3. Create a .env file with database credentials
### 4. Run npm start to start the server

## Technologies Used :computer:

### Node.JS
### Express.JS
### MongoDB

## Documentation :bookmark_tabs:
### Post man Documentation Link : https://documenter.getpostman.com/view/36384119/2sA3kaDz73
### Render Deployed Link : https://mentor-student-gcpl.onrender.com


