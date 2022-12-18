const express = require('express');
const router = express.Router();
//const bookModel = require('../models/booksDb.js')
const bookController=require('../controllers/storeBookData')
   

router.post("/createBook",bookController.storeData)
router.get("/bookList",bookController.bookList)
router.get("/getBooksInYear/:year",bookController.getBooksInYear)
router.post("/getParticularBooks",bookController.getParticularBooks)
router.get("/getXINRBooks",bookController.getXINRBooks)
router.get("/getRandomBooks",bookController.getRandomBooks)
module.exports = router;
