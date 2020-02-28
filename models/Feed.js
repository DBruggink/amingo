const mongoose = require('mongoose'); // this will upload the mongoose package

const Schema = mongoose.Schema;  // this invokes the mongoose package into the app

const FeedSchema = new Schema({
    fullname:{
        type:String
    },
    description:{
        type:String,
        required:true
    },
    hashtags:{
      type: Array,
    },
    image:{
        type: String
    },
    likes:{
        type: Number,
        default: 0
    },
    emirate:{
        type: String,   
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const FeedModel = mongoose.model('feed', FeedSchema);
module.exports = FeedModel;