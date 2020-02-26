const mongoose = require('mongoose'); // this will upload the mongoose package

const Schema = mongoose.Schema;  // this invokes the mongoose package into the app 

const SportSchema = new Schema({
    sports:{
        type: Array
    },
    experience:{
        type:Array
    },
    eventDate:{
        type:Date
    },
    eventLocation:{
        type:String
    },
    attending:{
        type:Boolean
    },
    

    
});

const SportModel = mongoose.model('Sport', SportSchema);
module.exports = SportModel;