const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId
const bookSchema = new mongoose.Schema({
    name:String,
    author:{
     type: ObjectId,
     ref:"authorData",
    },
    price:Number,
    ratings:Number,
    publisher:{
      type: ObjectId,
      ref:"publisherData",
    },
    isHardCover:{
      type:Boolean,
      default:false
    }

})
module.exports=mongoose.model("BookData",bookSchema)