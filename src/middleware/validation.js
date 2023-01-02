const customerModel = require('../models/customer_db.js')
const mobileValidation = function(req,res,next){
    let mobileNumber = String(req.body.mobileNumber)
    console.log(typeof(mobileNumber))
    mobileNumber.match(/^[0]?[789]\d{9}$/) ? next() : res.send({msg : "Please enter 10 digit Number Starts With"})

}
const emailValidation = function(req,res,next){
    let userEmail = String(req.body.emailID)
    userEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? next() : res.send({msg : "Please Enter Correct Email address"})
}
const isUserIDValid = async function(req,res,next){
    let c_id = req.params.custormerId
    try{
           let customerCount = await customerModel.findById(c_id).count()
           if (customerCount) next()
    }
    catch{
        res.send({msg:"Please Enter Valid Customer Id"})
    }

}
module.exports={mobileValidation,emailValidation,isUserIDValid}
