const express = require('express');
const router = express.Router();
const bookController=require('../controllers/storeBookData')

router.post("/createAuthor",bookController.storeAuthorData)
router.post("/createPublisher",bookController.storePublisherData)
router.post("/createBook",bookController.storeBookData)
router.get("/getBook",bookController.getBookData)
router.put("/book",bookController.updateBook)
module.exports = router;
