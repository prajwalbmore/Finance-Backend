const FDModel = require("../model/FDModel");
const memberModel = require("../model/memberModel");

const createFD = async(req,res) => {
    const {memberId,amount,interest,duration} = req.body
    try {
        const newFD = new FDModel({
            memberId,
            amount,
            interest,
            duration,
            startDate: Date.now(),
        })

        await newFD.save();
        return res.status(200).send({msg:"FD Created Sucessfully"})
    } catch (error) {
        return res.status(500).send(error);
    }
}

const getAllFD = async(req,res) => {
    try {
        const FD = await FDModel.find();
        if(!FD){
            return res.status(404).send({msg:"FD's not Found"})
        }

        return res.status(200).send({FD:FD})
    } catch (error) {
        return res.status(500).send(error);
    }
}
const getFDById = async(req,res) => {
    try {
        const FD = await FDModel.findById(req.params.id);
        if(!FD){
            return res.status(404).send({msg:"FD not Found"})
        }

        return res.status(200).send(FD)
    } catch (error) {
        return res.status(500).send(error);
    }
}


const updateFD = async(req,res) => {
    
    try {
        const {amount,interest,duration} = req.body;
        const id = req.params.id
        const FD = await FDModel.findById(id)
        if(!FD){
            return res.status(404).json({ msg: 'FD not found' });
        }else{
        FD.amount = amount || FD.amount
        FD.interest = interest || FD.interest
        FD.duration = duration || FD.duration

        await FD.save();
        return res.status(201).send({msg:'FD updated'})
        }
    } catch (error) {
        return res.status(500).send(error);
    }
}

const deleteFD = async(req,res) =>{
    try {
        const id = req.params.id 
        const deletedFD = await FDModel.findByIdAndDelete(id);
        if(!deletedFD){
            return res.status(404).send({msg:"FD not found"});
        }else{
            return res.status(202).send({msg:"FD deleted"});
        }

    } catch (error) {
        return res.status(500).send(error);
    }
}

const getFDByMemberID = async(req,res) =>{
    try {
        const {memberId} = req.body;
        const FD = await FDModel.find({memberId:memberId})
        if(!FD){
            return res.status(404).send({msg:"FD not found"});
        }else{
            return res.status(202).send(FD);
        }
    } catch (error) {
        return res.status(500).send(error);
    }
}
 
module.exports = {
    createFD,
    getAllFD,
    getFDByMemberID,
    updateFD,
    deleteFD,
    getFDById
}