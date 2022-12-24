const productModel = require('../models/product_db.js')
const userModel = require('../models/user_db.js')

const isFreeAppValidation = async function(req,res,next){
    if ("isfreeappuser" in (req.headers)){
      next()
    }
   else{
    res.send("The request is missing a mandatory header")
   }
}
const isUserExist = async function(req,res,next){
    let userIdData = await userModel.find().select({_id:1})
    const isUserPresent = userIdData.find((x) => x._id == req.body.userId)
    isUserPresent ? next() : res.send("User ID is not valid")
    
}
const isProductExist = async function(req,res,next){
    let productIdData= await productModel.find().select({_id:1})
    const isProductPresent = productIdData.find((x) => x._id == req.body.product_id)
    isProductPresent ? next() : res.send("Product ID is not valid")
}
module.exports.isFreeAppValidation=isFreeAppValidation
module.exports.isUserExist=isUserExist
module.exports.isProductExist=isProductExist