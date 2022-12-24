const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema({
    userId:{
     type: ObjectId,
     ref:"userData",
    },
    product_id:{
      type: ObjectId,
      ref:"productData",
    },
    amount:Number,
    isFreeAppTrue:Boolean,
    Date:String

})
module.exports=mongoose.model("orderData",orderSchema)