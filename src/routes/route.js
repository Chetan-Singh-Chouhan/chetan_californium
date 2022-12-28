const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js')
const auth = require('../middleware/auth.js')


router.post("/users",userController.createUser)
router.post("/login",userController.loginUser)
router.get("/users/:userId",auth.isAuthTokenFound,auth.isTokenValid,auth.isUserAuthorised,userController.getUser)
router.put("/users/:userId",auth.isAuthTokenFound,auth.isTokenValid,auth.isUserAuthorised,userController.updateUser)
router.delete("/users/:userId",auth.isAuthTokenFound,auth.isTokenValid,auth.isUserAuthorised,userController.deleteUser)
module.exports = router;
