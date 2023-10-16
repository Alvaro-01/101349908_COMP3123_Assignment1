const mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    username :{
        type: String,
        maxlength: 100,
        require: true
    }, 
    email: {
        type: String,
        maxlength: 50,
        require: true,
        unique: true
    }, 
    password: {
        type: String,
        maxlength: 50,
        require: true,
        lowercase: true
    }, 


})

const User = mongoose.model('User', userSchema);

module.exports = User;