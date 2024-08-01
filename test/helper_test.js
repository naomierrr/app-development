//import mongoose 
const { beforeEach } = require('mocha')
const mongoose = require('mongoose')

// connect to mongodb where 'students_list' is the name of the database
mongoose.connect("mongodb://localhost/students_list")

//check if it is connected
mongoose.connection
    // use .once to watch for mongoDB to connect the first time when the event occurred
    .once('open',function(){
        console.log('\n---- Connected to MongoDB')
    })
    // use .on to watch for error in the connection
    .on('error',function(e){
        console.log('Error connecting'),e
    })

    // clear all the collection from the 'student' document
    beforeEach(function(done){
        mongoose.connection.collections.students.drop()
        done()
    })