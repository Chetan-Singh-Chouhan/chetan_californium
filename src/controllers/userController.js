const userModel = require('../models/userModel.js')
const jwt = require('jsonwebtoken')
const { set } = require('mongoose')

const createUser = async function (req, res){
   try{
      let userData = req.body
      let getUserData = await userModel.create(userData)
      res.send({data:getUserData})
   }
   catch(err){
      console.log(err.message)
  }
  
}
const loginUser = async function (req, res){
   const userEmail = req.body.emailId    //fetching email from request
   const userPassword = req.body.password // fetching password from request
   const isDetailsRight= await userModel.findOne({emailId:userEmail,password:userPassword})
   if(isDetailsRight){
      const userToken = jwt.sign({emailId:userEmail,password:userPassword},'mySecretKey')
      res.send(userToken)
   }
   else res.send("Please Enter correct email and password")
   
}
const getUser= async function(req,res){
   const userId = req.params.userId
   const getUserData= await userModel.findById(userId)
   res.send({data:getUserData})
}

const updateUser= async function(req,res){
   try{
      let userId = req.params.userId
      let getUserData= await userModel.findByIdAndUpdate(
          userId,
         {$set:req.body},
         {new:true}
         )
      res.send(getUserData)
   }
   catch(err){
      console.log(err.message)
   }
}
const deleteUser= async function(req,res){
   const userId = req.params.userId
   const getUserData= await userModel.findByIdAndUpdate(
      userId,
      {$set:{isDeleted:true}},
      {new:true}
      )
   res.send(getUserData)
}
module.exports.createUser=createUser
module.exports.loginUser=loginUser
module.exports.getUser=getUser
module.exports.updateUser=updateUser
module.exports.deleteUser=deleteUser