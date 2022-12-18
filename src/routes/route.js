const express = require('express');
const router = express.Router();
const req = require('express/lib/request');

moviesArray=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
router.get("/movies", function(req, res){
    res.send(moviesArray)
})
router.get("/movies/:indexNumber", function(req, res){
    (req.params.indexNumber<moviesArray.length)?res.send(moviesArray[req.params.indexNumber]):res.send('Please use valid Index')
})
router.get("/films", function(req, res){
       res.send(moviesObject)
})
router.get("/films/:filmId",function(req,res){
    (req.params.filmId < moviesObject.length && req.params.filmId > 0 )?res.send(moviesObject[req.params.filmId-1]):res.send("No movie exists with this id")
    
})
router.get("/sol1",function(req,res){
    let arr= [1,3,4,5,6,7]
    firstElement=arr[0]
    for(i=0;i<arr.length;i++){
        (arr[i]==firstElement) ? firstElement++ : res.send(`missing number is ${firstElement}`)
    }
})
router.get("/sol2",function(req,res){
    let arr2=[33, 34, 35, 37, 38]
    firstElement=arr2[0]
    for(i=0;i<arr2.length;i++){
        (arr2[i]==firstElement) ? firstElement++ : res.send(`missing number is ${firstElement}`)
    }
})

module.exports = router;