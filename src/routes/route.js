const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js')
const auth = require('../middleware/auth.js')


router.post("/users",userController.createUser)
router.post("/login",userController.loginUser)
router.get("/users/:userId",auth.isAuthTokenFound,auth.isTokenValid,userController.getUser)
router.put("/users/:userId",auth.isAuthTokenFound,auth.isTokenValid,userController.updateUser)
router.delete("/users/:userId",auth.isAuthTokenFound,auth.isTokenValid,userController.deleteUser)
module.exports = router;
