const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    name:{
        type:String
    },
    designation:{
        type:String
    },
    description:{
        type:String
    },
    uploadImage:{
        type:String
    }
})

module.exports = new mongoose.model('Testimonial',testSchema,'Testimonial')