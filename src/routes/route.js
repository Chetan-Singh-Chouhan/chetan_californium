const express = require('express');
const router = express.Router();
const req = require('express/lib/request');

moviesArray=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
moviesObject=[ 
    {
     "id": 1,
     "name": "The Shining"
    }, 
    {
     "id": 2,
     "name": "Incendies"
    }, 
    {
     "id": 3,
     "name": "Rang de Basanti"
    }, 
    {
     "id": 4,
     "name": "Finding Nemo"
    }]
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

module.exports = router;