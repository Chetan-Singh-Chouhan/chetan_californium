const express = require('express');
const router = express.Router();


router.get("/api1",function(req,res){
   res.send("This is First Api")
})
router.get("/api2",function(req,res){
    res.send("This is Second Api")
 })
 router.get("/api3",function(req,res){
    res.send("This is Third Api")
 })

module.exports = router;
