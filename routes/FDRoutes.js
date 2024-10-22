const express = require('express')
const FDController = require('../controller/FDController')
const { auth } = require('../middleware/auth');
const router = express.Router();

router.post('/createFD',auth,FDController.createFD);
//http://localhost:7000/api/FD/createFD 

router.get('/getAllFD',auth,FDController.getAllFD);
//http://localhost:7000/api/FD/getAllFD

router.get('/getFDById/:id',auth,FDController.getFDById)
//http://localhost:7000/api/FD/getFDById/:id

router.get('/getFDByMemberID/:id',auth,FDController.getFDByMemberID)
//http://localhost:7000/api/FD/getFDByMemberID/

router.delete('/deleteFD/:id',auth,FDController.deleteFD)
//http://localhost:7000/api/FD/deleteFD/:id

router.put('/updateFD/:id',auth,FDController.updateFD)
//http://localhost:7000/api/FD/updateFD/:id

module.exports = router;