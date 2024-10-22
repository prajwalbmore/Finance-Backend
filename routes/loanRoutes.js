const express = require('express')
const loanController = require('../controller/loanController')
const { auth } = require('../middleware/auth');
const router = express.Router();

router.post('/createLoan',auth,loanController.createLoan);
//http://localhost:7000/api/loan/createLoan 

router.get('/getAllLoan',auth,loanController.getAllLoan);
//http://localhost:7000/api/loan/getAllLoan

router.get('/getLoanById/:id',auth,loanController.getLoanById)
//http://localhost:7000/api/loan/getLoanById/:id

router.get('/getLoanByMemberID/:id',auth,loanController.getLoanByMemberID)
//http://localhost:7000/api/loan/getLoanByMemberID/

router.delete('/deleteLoan/:id',auth,loanController.deleteLoan)
//http://localhost:7000/api/loan/deleteLoan/:id

router.put('/updateLoan/:id',auth,loanController.updateLoan)
//http://localhost:7000/api/loan/updateLoan/:id

module.exports = router;