const express = require('express');
const router = express.Router();
const ecomController=require('../controllers/ecomController.js')
const valid = require('../middlewares/validation')

router.post("/createUser",valid.isFreeAppValidation,ecomController.createUser)
router.post("/createProduct",ecomController.createProduct)
router.post("/createOrder",valid.isFreeAppValidation,valid.isUserExist,valid.isProductExist,ecomController.createOrder)

module.exports = router;
