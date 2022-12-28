const { response } = require('express')
const jwt = require('jsonwebtoken')


const isAuthTokenFound = function(req,res,next){
    if (!req.headers['x-auth-token']) res.send("No x-auth-token header Found")
    next()
}
const isTokenValid = async function(req,res,next){
    try{
        let token=req.headers['x-auth-token']
        jwt.verify(token,'mySecretKey')
        next()
    }
    catch(err){
        res.send("Token is not valid")
    }
}
const isUserAuthorised = async function(req,res,next){
    try{
        let userId = req.params.userId
        let token=req.headers['x-auth-token']
        let decodedToken = jwt.verify(token,'mySecretKey')
        decodedToken.id!=userId ? res.send("You are not authorised") : next()
    }
    catch(err){
        console.log(err.message)
    }
}
module.exports.isAuthTokenFound=isAuthTokenFound
module.exports.isTokenValid=isTokenValid
module.exports.isUserAuthorised=isUserAuthorised
