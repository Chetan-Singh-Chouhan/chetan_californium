const { response } = require('express')
const jwt = require('jsonwebtoken')


const isAuthTokenFound = function(req,res,next){
    try{
        if (!req.headers['x-auth-token']) res.status(400).send("No x-auth-token header Found")
        next()
    }
    catch(err){
        console.log(err.message)
    }
}
const isTokenValid = async function(req,res,next){
    try{
        let token=req.headers['x-auth-token']
        jwt.verify(token,'mySecretKey')
        next()
    }
    catch(err){
        res.status(401).send("Token is not valid")
    }
}
const isUserAuthorised = async function(req,res,next){
    try{
        let userId = req.params.userId
        let token=req.headers['x-auth-token']
        let decodedToken = jwt.verify(token,'mySecretKey')
        decodedToken.id!=userId ? res.status(403).send("You are not authorised") : next()
    }
    catch(err){
        console.log(err.message)
    }
}
module.exports.isAuthTokenFound=isAuthTokenFound
module.exports.isTokenValid=isTokenValid
module.exports.isUserAuthorised=isUserAuthorised
