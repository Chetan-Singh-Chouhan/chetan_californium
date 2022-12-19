const express = require('express');
const router = express.Router();
const bookController=require('../controllers/storeBookData')

router.post("/createBook",bookController.storeBookData)
router.post("/createAuthor",bookController.storeAuthorData)
router.get("/getList",bookController.getList)
router.post("/twoStates",bookController.twoStates)
router.get("/getBooks",bookController.getBooks)
module.exports = router;
