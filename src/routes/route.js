const express = require('express');
const router = express.Router();
const bookModel = require('../models/booksDb.js')
const bookController=require('../controllers/storeBookData')
router.get("/getBookData", async function (req, res){
   try{
   let allData= await bookModel.find()
   res.send(allData)
   }
   catch(err){
         console.log(err.message)
   }
   
})
router.post("/storeBookData",bookController.getData)


module.exports = router;
