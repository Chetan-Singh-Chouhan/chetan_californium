const { response } = require('express')
const jwt = require('jsonwebtoken')


const isAuthTokenFound = function(req,res,next){
    if (!req.headers['x-auth-token']) res.send("No x-auth-token header Found")
    next()
}
const isTokenValid = async function(req,res,next){
    try{
        let token=req.headers['x-auth-token']
        let checkToken=jwt.verify(token,'mySecretKey')
        if(!checkToken) res.send("Token is not valid")
        next()
    }
    catch(err){
        console.log(err.message)
    }
}
module.exports.isAuthTokenFound=isAuthTokenFound
module.exports.isTokenValid=isTokenValid
