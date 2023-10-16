const mongoose = require('mongoose');
var employeeSchema = mongoose.Schema({
    firstname :{
        type: String,
        maxlength: 100,
        require: true
    }, 
    lastname: {
        type: String,
        maxlength: 50,
        require: true,
        lowercase: true
    }, 
    email: {
        type: String,
        maxlength: 50,
        require: true,
        lowercase: true
    }, 
    gender: {
        type: String,
        maxlength: 25,
        require: true,
        enum: ['MALE', 'FEMALE', 'OTHER'],
    }, 

    salary: Number


})

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;