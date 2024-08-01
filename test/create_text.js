// import assert, aeeser is used to compare two boolean values
const assert = require("assert")
//import student schema
const Student = require('../src/student')

// describe function to push testing through Mocha
describe('Create the first data', function () {
    it('Saved the student', function () {
        //create a new student
        const student1 = new Student({ name: "Peter" })


        // read and save the student om the database. mongo will save it
        student1.save()

            // check if the student is not new using the method
            // if the student is new, the promise reaches the 'fulfilled' state abd will proceed to create the schema for the new student
            // otherwise the promise reaches the 'rejected' state and will proceed to reject line 'student1.save()'
            .then(function () {
                assert(!student1.isNew)
            })
    })
})