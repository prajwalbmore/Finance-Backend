const loanModel = require("../model/loanModel");

const createLoan = async(req,res) => {
    const {memberId,amount,interest,duration,installment} = req.body
    try {
        const newLoan = new loanModel({
            memberId,
            amount,
            interest,
            duration,
            installment,
            startDate: Date.now(),
        })

        await newLoan.save();
        return res.status(200).send({msg:"Loan Created Sucessfully"})
    } catch (error) {
        return res.status(500).send(error);
    }
}

const getAllLoan = async(req,res) => {
    try {
        const Loan = await loanModel.find();
        if(!Loan){
            return res.status(404).send({msg:"Loan not Found"})
        }

        return res.status(200).send({Loan:Loan})
    } catch (error) {
        return res.status(500).send(error);
    }
}
const getLoanById = async(req,res) => {
    try {
        const Loan = await loanModel.findById(req.params.id);
        if(!Loan){
            return res.status(404).send({msg:"Loan not Found"})
        }

        return res.status(200).send(Loan)
    } catch (error) {
        return res.status(500).send(error);
    }
}


const updateLoan = async(req,res) => {
    
    try {
        const {amount,interest,duration} = req.body;
        const id = req.params.id
        const Loan = await loanModel.findById(id)
        if(!Loan){
            return res.status(404).json({ msg: 'Loan not found' });
        }else{
        Loan.amount = amount || Loan.amount
        Loan.interest = interest || Loan.interest
        Loan.duration = duration || Loan.duration
        Loan.installment = installment || Loan.installment

        await Loan.save();
        return res.status(201).send({msg:'Loan updated'})
        }
    } catch (error) {
        return res.status(500).send(error);
    }
}

const deleteLoan = async(req,res) =>{
    try {
        const id = req.params.id 
        const deletedLoan = await loanModel.findByIdAndDelete(id);
        if(!deletedLoan){
            return res.status(404).send({msg:"Loan not found"});
        }else{
            return res.status(202).send({msg:"Loan deleted"});
        }

    } catch (error) {
        return res.status(500).send(error);
    }
}

const getLoanByMemberID = async(req,res) =>{
    try {
        const {memberId} = req.body;
        const Loan = await loanModel.find({memberId:memberId})
        if(!Loan){
            return res.status(404).send({msg:"Loan not found"});
        }else{
            return res.status(202).send(Loan);
        }
    } catch (error) {
        return res.status(500).send(error);
    }
}

module.exports = {
    createLoan,
    getAllLoan,
    getLoanById,
    updateLoan,
    deleteLoan,
    getLoanByMemberID
}