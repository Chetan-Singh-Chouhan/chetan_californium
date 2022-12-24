const mongoose=require('mongoose')
const productSchema = new mongoose.Schema({
   name:String,
   category:String,
   price:{
      type:Number,
      require:true["this is necessory"]
   }
})
module.exports=mongoose.model("productData",productSchema)