const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: String, 
  lastName: String,
  mobile: {
            type:String, 
            unique:true,
            required:true
          },
  emailId : String,
  password: String,
  age : Number,
  Gender : { 
            type : String,
            enum: ["Male","Female","Other"]
           },
  isDeleted:
  {
    type:Boolean,
    default: false
  }
},{timestamps:true});
module.exports = mongoose.model('user',userSchema)