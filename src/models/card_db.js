const mongoose=require('mongoose')
const cardSchema = new mongoose.Schema({
    cardNumber:String,
    cardType:String,
    customerName:String,
    status:{
      type:String,
      enum : ["ACTIVE","INACTIVE"]
    },
    vision: String,
    customerid:{
      type: String,
    }

})
module.exports=mongoose.model("cardData",cardSchema)