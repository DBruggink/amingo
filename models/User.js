// Schema for what is required from the user

const mongoose = require('mongoose'); // this will upload the mongoose package

const Schema = mongoose.Schema;  // this invokes the mongoose package into the app 

const UserSchema = new Schema({
    fullname:{
        type:String,
        required:true
     },
   
     email:{
         type:String,
         required:true
     },
     password:{
        type:String,
        required:true
     },
     age:{
        type:Number
     },
     sports:{
        type: Array
     },
     bio:{
      type: String,
      required:true
   },
     occupation:{
        type:String
     },
     date:{
        type:Date,
        default: Date.now
     }
});

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;
