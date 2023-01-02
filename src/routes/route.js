const express = require('express');
const router = express.Router();
const customerController=require('../controllers/customerApiData')
const cardController=require('../controllers/cardApiData')
const {mobileValidation,emailValidation,isUserIDValid}=require('../middleware/validation')

router.post("/createCustomerData",mobileValidation,emailValidation,customerController.createCustomer)
router.get("/getActiveCustomers",customerController.getAllCustomerList)
router.delete("/deleteCustomerData/:custormerId",isUserIDValid,customerController.deleteUser)
router.post("/createCardData",cardController.createCard)
router.get("/getCardList",cardController.getAllCard)
module.exports = router;
