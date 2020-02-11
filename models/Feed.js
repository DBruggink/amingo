const mongoose = require('mongoose'); // this will upload the mongoose package

const Schema = mongoose.Schema;  // this invokes the mongoose package into the app

const FeedSchema = new Schema({
    comments:{
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
        types: Number,
        default: 0
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const FeedModel = mongoose.model('feed', FeedSchema);
module.exports = FeedModel;