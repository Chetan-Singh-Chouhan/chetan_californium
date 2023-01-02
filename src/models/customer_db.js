const mongoose=require('mongoose')

const customerSchema = new mongoose.Schema({
   
   firstName:String,
   lastName:String,
   mobileNumber:Number,
   DOB:Date,
   emailID:String,
   customerId:String,
   status:{
      type:String,
      enum:["ACTIVE","INACTIVE"]
   },
   isDeleted:{
      type:Boolean,
      default:false
   }
})

module.exports=mongoose.model("customerData",customerSchema)
