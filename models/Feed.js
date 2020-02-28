const mongoose = require('mongoose'); // this will upload the mongoose package

const Schema = mongoose.Schema;  // this invokes the mongoose package into the app

const FeedSchema = new Schema({
    fullname:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:true
    },
    hashtags:{
      type: Array,
        required:false
    },
    image:{
        type: String,
        required:false
    },
    likes:{
        type: Number,
        default: 0,
        required:false
    },
    emirate:{
        type: String,
        required:false  
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const FeedModel = mongoose.model('feed', FeedSchema);
module.exports = FeedModel;