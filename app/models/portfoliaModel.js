const mongoose = require('mongoose');

const portfoliaSchema = new mongoose.Schema({
    projectcategory:{
        type:String
    },
    projectname:{
        type:String
    },
    projecttitle:{
        type:String
    },
    uploadImage:{
        type:Array
    },
    projecturl:{
        type:String
    },
    projectdate:{
        type:String
    }
    
})

module.exports = new mongoose.model('portfolia',portfoliaSchema,'portfolia')