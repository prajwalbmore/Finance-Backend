const express = require('express')
const userController = require('../controller/userController')
// const { auth } = require('../middleware/auth');
const router = express.Router();

router.post('/register',userController.register);
//http://localhost:7000/api/auth/register 

router.post('/login',userController.login);
//http://localhost:7000/api/auth/login


module.exports = router;