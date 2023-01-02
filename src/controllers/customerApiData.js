const customerModel = require('../models/customer_db.js')
const { response } = require('express')
const uuid = require('uuid')

const createCustomer = async function (req, res){
   try{
         { 

            await customerModel.create(     // fetching data from request body
               {
                  ...req.body,              //fetch data from request body using (...)spread
                  customerId:uuid.v4(),     // generating a random id whenever user is created
               }
            ) 
            res.send({msg:"data have been stored in Author table",data:customerModel})
         }
   }
   catch(err){
      console.log(err.message)
   }
}
const getAllCustomerList = async function (req, res){
   try{
         {
            const activeCustomers = await customerModel.find({status:"ACTIVE"})  //inserting Data in publisher Model
            res.send({data:activeCustomers})
         }
   }
   catch(err){
      console.log(err.message)
   }
}
const deleteUser = async function (req, res){
   try{
        const customerId = req.params.custormerId
        const updatedUserData = await customerModel.findByIdAndUpdate(
         customerId,
         {$set:{isDeleted:true}},
         {new:true}
        )
        res.status(200).send({data:updatedUserData})
         
   }
   catch(err){
      console.log(err.message)
   }
}

module.exports.createCustomer=createCustomer
module.exports.deleteUser=deleteUser
module.exports.getAllCustomerList=getAllCustomerList

