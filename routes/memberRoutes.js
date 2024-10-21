const express = require('express')
const memberController = require('../controller/memberController')
const { auth } = require('../middleware/auth');
const router = express.Router();

router.post('/addMember',auth,memberController.addMember);
//http://localhost:7000/api/member/addMember 

router.get('/getAllMember',memberController.getAllMembers);
//http://localhost:7000/api/member/getAllMember

router.get('/getMemberById/:id',auth,memberController.getMemberByID)
//http://localhost:7000/api/member/getMemberById/:id

module.exports = router;