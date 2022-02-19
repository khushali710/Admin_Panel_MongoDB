const { array } = require('@hapi/joi');
const mongoose = require('mongoose');
const multer = require('multer')

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    gender: {
        type: Array,
        ENUM :['female','male']
    },
    phoneno: {
        type: Number
    },
    password: {
        type: String
    },
    uploadImage: {
        type: String
    },
    city: {
        type: Array,
        ENUM:['rajkot','ahmdabad','surat']
    },
    hobby: {
        type:Array,
        ENUM:['cooking','dancing','travelling']
    }
});




module.exports = new mongoose.model('Register', userSchema, 'Register');