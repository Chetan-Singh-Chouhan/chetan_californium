const mongoose=require('mongoose')
const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required:true
    },
    price:{
        indianPrice:Number,
        europianPrice:Number
    },
    year:{
        type:Number,
        default:2021
    },
    tags:[String],
    authorName:String,
    totatPages:Number,
    stockAvailable:Boolean
      
})
module.exports=mongoose.model("BookData",bookSchema)