const userModel = require('../models/user_db.js')
const productModel = require('../models/product_db.js')
const orderModel = require('../models/order_db.js')
const { response } = require('express')


const createUser = async function (req, res){
   try{
         {
            await userModel.create({
               ...req.body,
               isFreeAppUser:req.headers['isfreeappuser']
            }) 
            res.send({msg:"data have been stored in Author table"})
         }
   }
   catch(err){
      console.log(err.message)
   }
}
const createProduct = async function (req, res){
   try{
         {
            await productModel.create(req.body)
            res.send({msg:"data have been stored in product table"})
         }
   }
   catch(err){
      console.log(err.message)
   }
}
const createOrder = async function (req, res){
   try
   {
        if(req.headers['isfreeappuser']=='true')
        {
            await orderModel.create({
               ...req.body,
               amount:0,
               isFreeAppTrue:req.headers['isfreeappuser'],
            })
            res.send("Data has been saved in Order Table")
        }
        else
        {
            const orderedProductPrice = await productModel.find({_id:req.body.product_id}).select({price:1,_id:0})
            const userTotalBalance = await userModel.find({_id:req.body.userId}).select({balance:1,_id:0})
            let pPrice = orderedProductPrice[0].price
            let userBal = userTotalBalance[0].balance
            if (userBal>pPrice)
            {
               await orderModel.create({
                  ...req.body,
                  amount:pPrice,
                  isFreeAppTrue:req.headers['isfreeappuser'],
               })
               await userModel.findOneAndUpdate(
                  {_id:req.body.userId},
                  {$inc:{balance:-(pPrice)}}
               )
               res.send("order has been Created")
            }
            else
            {
                res.send("Unsufficient balance in your account")
            }
            

         }
        

   }
   catch(err){
      console.log(err.message)
   }
}


module.exports.createProduct=createProduct
module.exports.createUser=createUser
module.exports.createOrder=createOrder
